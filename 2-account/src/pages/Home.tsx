import { useState } from "react";
import SystemUiconsUserMaleCircle from "../components/icons/SystemUiconsUserMaleCircle";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-slate-700 h-dvh flex items-center justify-center">
      <div className="flex items-center relative">
        <div
          className="cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
        >
          <SystemUiconsUserMaleCircle className="size-25" />
        </div>
        <div
          className={`${
            show
              ? "hidden"
              : "absolute animate-fade left-15 top-15  outline outline-gray-500/70 overflow-hidden rounded w-80"
          }`}
        >
          <div className="border-b p-2 text-center border-b-gray-800 bg-gray-200 w-full">
            <strong className="block font-medium">Ali so</strong>
            <small className="text-gray-400">ali@yahoo.com</small>
          </div>

          <ul className="p-2 bg-white capitalize font-medium cursor-pointer">
            <li>about</li>
            <li>setting</li>
            <li className="text-red-500">logOut</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
