import Link from "next/link";
import Nav from "./Nav";

export default ({ children }) => {
  return (
    <div>
      <body className="bg-black-alt font-sans leading-normal tracking-normal">
        <div className="bg-gray-900">
          <Nav />
          {/* Container */}
          <div className="container w-full mx-auto pt-20">
            <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
              {children}
            </div>
          </div>
        </div>
      </body>
      <style jsx>
        {`
          .bg-black-alt {
            background: #191919;
          }
          .text-black-alt {
            color: #191919;
          }
          .border-black-alt {
            border-color: #191919;
          }
        `}
      </style>
    </div>
  );
};
