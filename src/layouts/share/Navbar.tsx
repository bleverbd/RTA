import { ImagesProvider } from "@/lib/ImagesProvider";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";
import { MdOutlineCall } from "react-icons/md";
import Container from "@/components/common/Container";



const NavElement = [
  { path: "/", label: "হোম" },
  { path: "/courses", label: "কোর্স" },
  { path: "/books", label: "বই" },
  { path: "/notice", label: "নোটিশ" },
  { path: "/about-us", label: "আমাদের সম্পর্কে" },
];
const NavItem = () => {
  return (
    <ul className="flex gap-8 items-center">
      {NavElement.map((item, index) => (
        <li key={index} className="font-medium text-lg">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              cn(
                "duration-300  transition-all hover:text-Primary ",
                {
                  "font-bold text-Primary underline underline-offset-4": isActive,
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
    <div className="py-2 shadow-md relative z-50 w-full">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="overflow-hidden ">
            <img
              className="w-[118px] h-[56px] object-center"
              src={ImagesProvider.logo}
              alt="Logo"
            />
          </Link>

          <div>
            <NavItem />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <a
              href="tel:+8801234567890"
              className="bg-[#E8E7F2] hover:bg-[#D9D8E8] py-2 px-3 cursor-pointer rounded-md transition-colors duration-200 inline-flex items-center"
            >
              <MdOutlineCall color="#150e72" size={25} />

            </a>

            <Link
              to="/register"
              className="px-5 py-2 bg-[#150e72] text-white font-medium rounded-md hover:bg-[#3a008a] duration-300 transition-all"
            >
              লগইন
            </Link>
          </div>
        </div>

      </Container>
    </div>




  );
};

export default Navbar;
