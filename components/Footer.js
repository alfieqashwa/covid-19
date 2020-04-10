import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-400 rounded shadow mx-2 p-2">
    <div className="container mx-auto flex py-8">
      <div className="w-full mx-auto flex flex-wrap">
        <div className="flex w-full">
          <div className="px-3">
            <h3 className="font-bold font-bold text-gray-100">Resources</h3>
            <ul className="list-reset items-center text-sm pt-3">
              <li>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1"
                  href="https://github.com/NovelCOVID/API"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-indigo-600 font-bold">
                    NovelCOVID API
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1"
                  href="https://www.worldometers.info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-600 font-bold">
                    Worldometers Coronavirus
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1"
                  href="https://coronavirus.jhu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-600 font-bold">
                    Johns Hopkins University & Medicine
                  </span>{" "}
                  Coronavirus COVID-19 Global Cases by the Center for Systems
                  Science and Engineering (CSSE)
                </a>
              </li>
              <br />
              <li>
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1"
                  href="https://www.alfieqashwa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  This site is made with{" "}
                  <span className="text-red-600">
                    <FontAwesomeIcon icon={faHeart} />
                  </span>{" "}
                  by{" "}
                  <span className="text-gray-600 font-bold">AlfieQashwa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
