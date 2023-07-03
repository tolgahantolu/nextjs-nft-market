import Link from "next/link";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { DUMMY_MENU_LIST } from "../../constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
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

      <div className="flex items-center gap-4">
        <Input />
        <Button
          bgColor="theme-dark-purple"
          textColor="theme-white"
          borderColor="theme-dark-purple"
          content="Upload"
        />
        <Button
          bgColor="transparent"
          textColor="theme-dark-purple"
          borderColor="theme-dark-purple"
          content="Connect Wallet"
        />
      </div>
    </nav>
  );
};

export default Navbar;
