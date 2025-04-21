import { NavbarSearch } from "./NavbarSearch";

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
    return (
        <div className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 bg-transparent z-[35] backdrop-blur shadow-md ${className}`}>
            <div className="flex-grow flex">
                <NavbarSearch />
            </div>
        </div>
    );
};

export default Navbar;