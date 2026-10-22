import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";

type LocationState = { from?: string } | null;

function SignInPage() {
  const { isSignedIn, signIn, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState)?.from ?? "/favorites";

  function handleSignIn() {
    signIn();
    navigate(from, { replace: true });
  }

  if (isSignedIn) {
    return (
      <section className="page">
        <h1>You are signed in</h1>
        <Button variant="secondary" onClick={signOut}>Sign out</Button>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>Sign in</h1>
      <p>Sign in to see your favorite posts.</p>
      <Button onClick={handleSignIn}>Sign in</Button>
    </section>
  );
}

export default SignInPage;