import { Link } from "react-router";

function HomePage() {
  return (
    <section className="page">
      <h1>Hi,Dilnaz!</h1>
      <p>Welcome to my blog, here I post everything about my studies and life!</p>
      <p>
        <Link to="/posts">Read my posts</Link>
      </p>
    </section>
  );
}

export default HomePage;