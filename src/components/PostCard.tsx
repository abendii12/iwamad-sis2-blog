import { Link } from "react-router";
import type { Post } from "../data/posts";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import LikeButton from "./LikeButton";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-date">{post.date}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <p>{post.excerpt}</p>
      <div className="post-actions">
        <Link to={`/posts/${post.id}`}>Read more</Link>
        <LikeButton postId={post.id} />
      </div>
    </Card>
  );
}

export default PostCard;