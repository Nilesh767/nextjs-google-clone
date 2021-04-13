import Image from "next/image";
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
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="px-6 py-3 ml-10 mr-5 max-w-2xl flex flex-grow border border-gray-200 rounded-full shadow-lg ">
          <input
            ref={searchInputRef}
            placeholder={router.query.query}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <SearchIcon className="h-7 mr-1 pl-4 text-blue-500 border-l-2 border-gray-300" />
          <button type="submit" hidden onClick={search}>
            Search
          </button>
        </form>
        <ViewGridIcon className="h-10 w-10 p-2 mr-2 ml-auto rounded-full cursor-pointer text-gray-500 hover:bg-gray-100" />
        <Avatar url="https://i.ibb.co/0cDKvfd/photo01-square.jpg" />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
