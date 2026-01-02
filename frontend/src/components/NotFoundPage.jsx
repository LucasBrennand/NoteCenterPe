import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-white flex flex-col w-full h-dvh items-center justify-center text-8xl gap-9 object-contain bg-[url(https://static.vecteezy.com/system/resources/previews/055/011/198/non_2x/continuous-one-line-drawing-of-metal-gear-or-cog-mechanism-wheels-logo-vector.jpg)]">
      <h1 className="text-red-600 bg-transparent shadow-2xl p-4 text-shadow-2xs">Error 404 - Page Not Found</h1>
      <Link to={"/"}>
        <button className="border-2 border-amber-50 p-3 cursor-pointer">Go back</button>
      </Link>
    </div>
  );
}
export default NotFoundPage;
