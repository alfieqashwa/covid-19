/*
  source about active link:
  https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
*/

import { useState } from "react";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGlobeAsia,
  faGlobeAmericas,
  faAllergies,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const router = useRouter();
  const [isToggle, setIsToggle] = useState(false);

  const onClick = () => {
    setIsToggle(t => !t);
  };

  return (
    <nav id="header" className="bg-gray-900 fixed w-full z-10 top-0 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-2">
        <div className="w-1/2 pl-2 md:pl-0">
          <ActiveLink href="/">
            <a className="text-gray-100 pl-2 text-base xl:text-xl no-underline hover:no-underline font-bold">
              <FontAwesomeIcon
                icon={faAllergies}
                size="2x"
                pulse
                className="text-indigo-400 pr-2"
              />
              <span className="pl-2 uppercase tracking-widest focus:outline-none font-bold text-indigo-400">
                Covid-19
              </span>
            </a>
          </ActiveLink>
        </div>
        <div className="w-1/2 pr-0">
          <div className="flex relative inline-block float-right">
            <div className="relative text-sm text-gray-100">
              <button
                type="button"
                className="flex items-center focus:outline-none mr-3"
              >
                <DrLiWenliang />
                <span className="hidden md:inline-block text-gray-500 font-bold">
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
                  <title>Dr.Li Wenliang</title>
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
              <ActiveLink href="/">
                <a className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-gray-100 border-b-2 border-gray-900 hover:border-blue-400">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="mr-3 text-blue-400"
                  />
                  <span className="pb-1 md:pb-0 text-sm">Home</span>
                </a>
              </ActiveLink>
            </li>
            <li
              className={`mr-6 my-2 md:my-0 ${
                router.pathname === "/indonesia"
                  ? " text-pink-400 border-b-2 border-pink-400"
                  : "text-gray-500"
              }`}
            >
              <ActiveLink href="/indonesia">
                <a className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-gray-100 border-b-2 border-gray-900 hover:border-pink-400">
                  <FontAwesomeIcon
                    icon={faGlobeAsia}
                    className="mr-3 text-pink-400"
                  />
                  <span className="pb-1 md:pb-0 text-sm">Indonesia</span>
                </a>
              </ActiveLink>
            </li>
            <li
              className={`mr-6 my-2 md:my-0 ${
                router.pathname === "/countries"
                  ? " text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-500"
              }`}
            >
              <ActiveLink href="/countries">
                <a className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-purple-400">
                  <FontAwesomeIcon
                    icon={faGlobeAmericas}
                    className="mr-3 text-purple-400"
                  />
                  <span className="pb-1 md:pb-0 text-sm">Countries</span>
                </a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function DrLiWenliang() {
  return (
    <img
      src="/drliwenliang.jpg"
      alt="Dr. Li Wenliang"
      className="w-8 h-8 rounded-full border-2 border-pink-900 mr-4"
    />
  );
}
