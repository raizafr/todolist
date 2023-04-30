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
            <Link to={"/create"} className="hidden md:inline">
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
      {/* <svg
        className="-m-1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
        transform="rotate(180)"
        version="1.1"
        viewBox="0 0 1440 230"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 1)"></stop>
            <stop offset="100%" stopColor="rgba(11, 255, 221.939, 1)"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0 138l40 7.7c40 7.3 120 23.3 200 30.6 80 7.7 160 7.7 240-19.1C560 130 640 77 720 72.8 800 69 880 115 960 115s160-46 240-72.8C1280 15 1360 8 1440 26.8c80 19.2 160 65.2 240 69 80 4.2 160-34.8 240-46 80-11.8 160 4.2 240 23 80 19.2 160 42.2 240 46 80 4.2 160-11.8 240-26.8s160-31 240-15.3c80 15.3 160 61.3 240 57.5 80-4.2 160-57.2 240-65.2s160 31 240 26.8c80-3.8 160-49.8 240-42.1 80 7.3 160 69.3 240 99.6 80 30.7 160 30.7 240 3.9C4400 130 4480 77 4560 46s160-38 240-15.3c80 23.3 160 76.3 240 84.3s160-31 240-38.3c80-7.7 160 15.3 240 26.8s160 11.5 200 11.5h40v115H0z"
        ></path>
      </svg> */}
    </>
  );
};

export default Navbar;
