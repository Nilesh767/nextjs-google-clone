import { useRouter } from "next/router";
import { useRef } from "react";

import { SearchIcon, ViewGridIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "../../Avatar";
import HeaderOptions from "./HeaderOptions/HeaderOptions";

const Header = () => {
  const searchInputRef = useRef();
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value;
    if (!query) return;
    router.push(`/search?query=${query}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <img
          src="/google.svg"
          height={40}
          width={40}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="px-4 py-2 sm:px-6 sm:py-3 mx-3 sm:ml-10 max-w-2xl flex flex-grow border border-gray-200 rounded-full shadow-lg ">
          <input
            ref={searchInputRef}
            defaultValue={router.query.query}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 mr-1 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <SearchIcon className="h-7 mr-1 pl-1 sm:pl-4 text-blue-500 border-l-2 border-gray-300" />
          <button type="submit" hidden onClick={search}>
            Search
          </button>
        </form>
        <ViewGridIcon className="h-10 w-10 p-2 mr-2 ml-auto rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hidden sm:inline-flex" />
        <Avatar url="https://i.ibb.co/0cDKvfd/photo01-square.jpg" />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
