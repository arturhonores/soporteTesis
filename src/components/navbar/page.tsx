import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import ActionsButtons from "./actions-buttons";

const Navbar = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="flex justify-between">
        <Logo />
        <NavigationBar />
        <ActionsButtons />
      </div>
    </div>
  );
};

export default Navbar;
