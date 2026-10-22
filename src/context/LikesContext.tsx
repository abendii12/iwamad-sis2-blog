import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type LikesContextValue = {
  isLiked: (postId: number) => boolean;
  toggleLike: (postId: number) => void;
};

const LikesContext = createContext<LikesContextValue | null>(null);

export function LikesProvider({ children }: { children: ReactNode }) {
  // { 1: true, 3: false } means post 1 is liked, post 3 is not
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const value: LikesContextValue = {
    isLiked: (postId) => liked[postId] === true,
    toggleLike: (postId) =>
      setLiked((prev) => ({ ...prev, [postId]: !prev[postId] })),
  };

  return <LikesContext.Provider value={value}>{children}</LikesContext.Provider>;
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used inside LikesProvider");
  }
  return context;
}