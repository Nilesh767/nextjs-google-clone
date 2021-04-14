import { ViewGridIcon } from "@heroicons/react/solid";

import Avatar from "../Avatar";

const Header = () => {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">
          <a href="https://github.com/nilesh767" target="_blank">
            About
          </a>
        </p>
        <p className="link">
          <a
            href="https://github.com/Nilesh767/nextjs-google-clone"
            target="_blank"
          >
            Github
          </a>
        </p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-100 hidden sm:inline-flex" />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
