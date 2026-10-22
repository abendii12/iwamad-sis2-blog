import { Link } from "react-router";

function HomePage() {
  return (
    <section className="page">
      <h1>HOME_TITLE</h1>
      <p>HOME_INTRO</p>
      <p>
        <Link to="/posts">Read my posts</Link>
      </p>
    </section>
  );
}

export default HomePage;