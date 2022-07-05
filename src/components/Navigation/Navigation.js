import NavItem from "./Navitem";

export default function Navigation() {
  return (
    <nav className=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className=" text-[20px] flex flex-wrap justify-start items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="font-bold text-xl  whitespace-nowrap dark:text-white">
            Smith<span className="text-[#8583e1] text-[30px]">.</span>CV
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden bg-[#100f3a] w-full md:block md:w-auto"
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <NavItem titleItem="About" linkItem="/" />
            <NavItem titleItem="Skills" linkItem="/Skills" />
            <NavItem titleItem="Services" linkItem="/Services" />
            <NavItem titleItem="Portfolio" linkItem="/Portfolio" />
            <NavItem titleItem="Testimonials" linkItem="/Testimony" />
            <NavItem titleItem="Contact" linkItem="/Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
