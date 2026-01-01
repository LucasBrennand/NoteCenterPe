import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>Not found 404</h1>
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </div>
  );
}
export default NotFoundPage;
