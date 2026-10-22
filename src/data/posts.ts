export type Post = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "POST_1_TITLE",
    date: "2026-10-05",
    tags: ["study"],
    excerpt: "POST_1_EXCERPT",
    body: ["POST_1_PARAGRAPH_1", "POST_1_PARAGRAPH_2"],
  },
  {
    id: 2,
    title: "POST_2_TITLE",
    date: "2026-10-09",
    tags: ["react"],
    excerpt: "POST_2_EXCERPT",
    body: ["POST_2_PARAGRAPH_1", "POST_2_PARAGRAPH_2"],
  },
  {
    id: 3,
    title: "POST_3_TITLE",
    date: "2026-10-12",
    tags: ["design"],
    excerpt: "POST_3_EXCERPT",
    body: ["POST_3_PARAGRAPH_1", "POST_3_PARAGRAPH_2"],
  },
  {
    id: 4,
    title: "POST_4_TITLE",
    date: "2026-10-16",
    tags: ["life"],
    excerpt: "POST_4_EXCERPT",
    body: ["POST_4_PARAGRAPH_1", "POST_4_PARAGRAPH_2"],
  },
  {
    id: 5,
    title: "POST_5_TITLE",
    date: "2026-10-20",
    tags: ["testing"],
    excerpt: "POST_5_EXCERPT",
    body: ["POST_5_PARAGRAPH_1", "POST_5_PARAGRAPH_2"],
  },
];