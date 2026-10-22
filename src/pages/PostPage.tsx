import { Link, useParams } from "react-router";
import { posts } from "../data/posts";
import Tag from "../components/ui/Tag";
import LikeButton from "../components/LikeButton";

function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <section className="page">
        <h1>Post not found</h1>
        <p>There is no post with id {id}.</p>
        <Link to="/posts">← All posts</Link>
      </section>
    );
  }

  return (
    <article className="page post">
      <Link to="/posts">← All posts</Link>
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      {post.body.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <LikeButton postId={post.id} />
    </article>
  );
}

export default PostPage;