import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

function PostsPage() {
  return (
    <section className="page">
      <h1>Posts</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsPage;