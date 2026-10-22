import { Link } from "react-router";
import { posts } from "../data/posts";
import { useLikes } from "../context/LikesContext";
import PostCard from "../components/PostCard";

function FavoritesPage() {
  const { isLiked } = useLikes();
  const favorites = posts.filter((post) => isLiked(post.id));

  return (
    <section className="page">
      <h1>My favorites</h1>
      {favorites.length === 0 ? (
        <p>
          No liked posts yet. <Link to="/posts">Go to posts</Link> and press Like.
        </p>
      ) : (
        <div className="post-grid">
          {favorites.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritesPage;