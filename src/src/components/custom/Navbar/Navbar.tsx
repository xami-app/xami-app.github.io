
interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {

    return (
        <div className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 bg-transparent backdrop-blur-md shadow-md z-10 ${className}`}>
            <div className="flex-grow flex">
                <input placeholder="Here comes a search!"></input>
            </div>
        </div>
    );
};

export default Navbar;