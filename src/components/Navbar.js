import { Link } from "react-router-dom";

const Navbar = () => {
  const toggle = () => {
    const nav = document.getElementById("mobile-nav");
    nav.classList.toggle("hidden");
  };
  return (
    <>
      <nav className="bg-gradient-to-r from-green-500 to-primary-1 py-4 text-white static">
        <div className="flex justify-between px-9 md:px-20 lg:px-28">
          <div className="">
            <Link to={"/"}>TODOLIST</Link>
          </div>
          <div>
            <Link
              to={"/create"}
              className="hidden md:inline bg-gradient-to-b from-green-500 to-primary-1 px-3 py-1 rounded-lg hover:text-black"
            >
              Tambah Data
            </Link>
          </div>
          {/* mobile */}
          <div onClick={toggle} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div
          id="mobile-nav"
          className="w-3/4 absolute top-0 h-screen bg-gradient-to-r from-green-500 to-primary-1  hidden md:hidden"
        >
          <ul className="mt-20 text-center">
            <li className="rounded-lg py-1 bg-gradient-to-l from-green-500 to-primary-1 mx-2">
              {" "}
              <Link to={"/create"}>Tambah Data</Link>
            </li>
          </ul>
        </div>
        {/* /mobile */}
      </nav>
    </>
  );
};

export default Navbar;
