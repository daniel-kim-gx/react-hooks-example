import { Link } from "@reach/router";

export function Header() {
  return (
    <header>
      <Link to="/data">data</Link>
      <Link to="/behavior">behavior</Link>
      <Link to="/complex">complex</Link>
    </header>
  );
}
