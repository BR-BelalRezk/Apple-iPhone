import { navLists } from "../constants/constants";
import { appleImg, bagImg, searchImg } from "../utils/utils";

export default function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full max-w-[1120px] relative mx-auto">
        <img src={appleImg} alt="apple image" width={15} height={20} />
        <ul className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <li
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-5 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search icon" width={20} height={20} />
          <img src={bagImg} alt="Bag icon" width={20} height={20} />
        </div>
      </nav>
    </header>
  );
}
