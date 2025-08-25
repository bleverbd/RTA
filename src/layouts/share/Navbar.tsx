import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";

const NavElement = [
  { path: "/", label: "HOME" },
  { path: " a", label: "NEW REMIXES" },
  { path: " b", label: "VIDEOS" },
  { path: " v", label: "GENRES" },
  { path: " c", label: "TOP DOWNLOAD" },
  { path: " d", label: "MEMBERSHIP" },
  { path: " d", label: "FAVORITES" },
];
const NavItem = () => {
  return (
    <ul className="flex gap-8 items-center">
      {NavElement.map((item, index) => (
        <li key={index} className="text-white font-poppins">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              cn(
                "font-light   hover:text-white/50 duration-300 transition-all",
                {
                  "font-bold": isActive,
                }
              )
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className="mt-6 ">
      <Container>
        <div className="relative z-50 w-full" >
          <div className="px-12 py-4 flex items-center justify-between shadow-md rounded-[24px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.13)_0%,_rgba(153,153,153,0.13)_100%)] ">
            <Link to="/" className="overflow-hidden ">
              {/* <img
                className="w-[118px] h-[56px] object-center"
                src={ImagesProvider.logo}
                alt="Logo"
              /> */}
            </Link>

            <div>
              <NavItem />
            </div>
            <div className="flex gap-4 items-center">
             
              <Link
                to="/log-in"
                className="font-Poppins transition-all  hover:text-white/50 duration-300  font-semibold text-base text-white"
              >
                LOG IN
              </Link>
              <Link
                to="/register"
                className="font-Poppins transition-all  hover:text-white/50 font-semibold text-base px-4 py-3 text-white rounded-[16px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.13)_0%,_rgba(153,_153,_153,_0.13)_100%)]"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
