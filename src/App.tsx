import { Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { LikesProvider } from "./context/LikesContext";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./pages/SignInPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./style.css";
import "./styles/ui.css";

function App() {
  return (
    <AuthProvider>
      <LikesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:id" element={<PostPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route element={<RequireAuth />}>
              <Route path="favorites" element={<FavoritesPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LikesProvider>
    </AuthProvider>
  );
}

export default App;