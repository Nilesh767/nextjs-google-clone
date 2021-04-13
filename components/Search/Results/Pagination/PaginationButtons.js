import Link from "next/link";
import { useRouter } from "next/router";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between text-[#4285f4] max-w-lg ">
      {startIndex >= 10 && (
        <Link
          href={`/search?query=${router.query.query}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col flex-grow items-center cursor-pointer hover:underline ">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link
        href={`/search?query=${router.query.query}&start=${startIndex + 10}`}
      >
        <div className="flex flex-col flex-grow items-center cursor-pointer hover:underline ">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
