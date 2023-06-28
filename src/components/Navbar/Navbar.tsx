import Link from "next/link";
import { IMenuList } from "../../../typescript";
import Input from "../Input/Input";

const DUMMY_MENU_LIST: Array<IMenuList> = [
  {
    name: "marketplace",
    href: "/marketplace",
  },
  {
    name: "resource",
    href: "/resource",
  },
  {
    name: "about",
    href: "/about",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <p
        data-testid="logo"
        className="uppercase font-extrabold text-3xl text-theme-dark-purple"
      >
        nfters
      </p>

      <ul className="flex items-center gap-4">
        {DUMMY_MENU_LIST.map((item, i: React.Key) => (
          <Link key={i} href={item.href}>
            <li className="capitalize text-lg">{item.name}</li>
          </Link>
        ))}
      </ul>

      <Input />
    </nav>
  );
};

export default Navbar;
