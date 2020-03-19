import Link from "next/link";

export default ({ children }) => {
  return (
    <>
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <Link href="/">
            <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
              World
            </a>
          </Link>
        </li>
        <li className="mr-1">
          <Link href="/indonesia">
            <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
              Indonesia
            </a>
          </Link>
        </li>
        <li className="mr-1">
          <Link href="#">
            <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
              Map
            </a>
          </Link>
        </li>
        <li className="mr-1">
          <Link href="#">
            <a className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold">
              About
            </a>
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
};
