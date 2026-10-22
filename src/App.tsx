import { Routes, Route } from "react-router";
import { LikesProvider } from "./context/LikesContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./style.css";
import "./styles/ui.css";

function App() {
  return (
    <LikesProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LikesProvider>
  );
}

export default App;