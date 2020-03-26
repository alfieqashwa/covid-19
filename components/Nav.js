import { useState } from "react";
import Link from "./ActiveLink";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFlag, faAllergies } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const router = useRouter();
  const [isToggle, setIsToggle] = useState(false);

  const onClick = () => {
    setIsToggle(t => !t);
  };

  return (
    <nav id="header" className="bg-gray-900 fixed w-full z-10 top-0 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-2">
        <div className="w-1/2 pl-2 md:pl-0">
          <Link href="/">
            <a className="text-gray-100 pl-2 text-base xl:text-xl no-underline hover:no-underline font-bold">
              <FontAwesomeIcon
                icon={faAllergies}
                size="2x"
                pulse
                className="text-blue-400 pr-3"
              />
              <span className="pl-2">Covid-19</span>
            </a>
          </Link>
        </div>
        <div className="w-1/2 pr-0">
          <div className="flex relative inline-block float-right">
            <div className="relative text-sm text-gray-100">
              <button
                type="button"
                className="flex items-center focus:outline-none mr-3"
              >
                <MyImage />
                <span className="hidden md:inline-block text-gray-400 font-bold">
                  In Memory of Dr. Li Wenliang
                </span>
              </button>
            </div>

            <div className="block lg:hidden pr-4">
              <button
                type="button"
                onClick={onClick}
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isToggle ? "block" : "hidden"
          } lg:block mt-2 lg:mt-0 bg-gray-900 z-20`}
        >
          <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
            <li
              className={`mr-6 my-2 md:my-0 ${
                router.pathname === "/"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-500"
              }`}
            >
              <Link href="/">
                <a className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-gray-100 border-b-2 border-gray-900 hover:border-blue-400">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="mr-3 text-blue-400"
                  />
                  <span className="pb-1 md:pb-0 text-sm">Home</span>
                </a>
              </Link>
            </li>
            <li
              className={`mr-6 my-2 md:my-0 ${
                router.pathname === "/indonesia"
                  ? " text-pink-400 border-b-2 border-pink-400"
                  : "text-gray-500"
              }`}
            >
              <Link href="/indonesia">
                <a className="block py-1 md:py-3 pl-1 align-middle  no-underline hover:text-gray-100 border-b-2 border-gray-900 hover:border-pink-400">
                  <FontAwesomeIcon
                    icon={faFlag}
                    className="mr-3 text-pink-400"
                  />
                  <span className="pb-1 md:pb-0 text-sm">Indonesia</span>
                </a>
              </Link>
            </li>
            <li className="mr-6 my-2 md:my-0">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-purple-400"
              >
                <i className="fa fa-envelope fa-fw mr-3"></i>
                <span className="pb-1 md:pb-0 text-sm">Countries</span>
              </a>
            </li>
          </ul>

          <div className="relative pull-right pl-4 pr-4 md:pr-0">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal"
            />
            <div
              className="absolute search-icon"
              style={{ top: "0.375rem", left: "1.75rem" }}
            >
              <svg
                className="fill-current pointer-events-none text-gray-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .selected: border-indigo-500;
      `}</style>
    </nav>
  );
};

function MyImage() {
  return (
    <img
      src="/drliwenliang.jpg"
      alt="Dr. Li Wenliang"
      className="w-8 h-8 rounded-full mr-4"
    />
  );
}
