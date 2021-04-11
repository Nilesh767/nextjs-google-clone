import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

const Form = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}`);
  };

  return (
    <form className="flex flex-col flex-grow items-center mt-44 w-4/5">
      <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
      />
      <div className="flex w-full m-5 px-5 py-3 items-center max-w-md rounded-full border border-gray-300 hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500 " />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <div
        className="flex flex-col w-1/2 space-y-2 justify-center mt-3 sm:space-y-0 sm:space-x-4 sm:flex-row 
        "
      >
        <button className="btn" onClick={search}>
          Google Search
        </button>
        <button className="btn">I'm Feeling Lucky</button>
      </div>
    </form>
  );
};

export default Form;
