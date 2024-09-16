
import { Link } from "react-router-dom";

export const HeadNav = () => {
  return (
      <div className="flex items-center justify-between w-full bg-background ">
        <Link to="/">
          <h1>FormoTex</h1>
        </Link>
      </div>
  );
};
