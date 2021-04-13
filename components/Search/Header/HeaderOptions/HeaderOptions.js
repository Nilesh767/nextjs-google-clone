import {
  DotsVerticalIcon,
  PhotographIcon,
  SearchIcon,
  ShoppingBagIcon,
  NewspaperIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";

import HeaderOption from "./HeaderOption/HeaderOption";

const HeaderOptions = () => {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly border-b
      text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52"
    >
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={BookOpenIcon} title="Books" />
        <HeaderOption Icon={ShoppingBagIcon} title="Shopping" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
