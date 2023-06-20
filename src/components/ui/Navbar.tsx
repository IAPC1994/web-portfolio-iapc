import { useContext } from "react";
import { navbarItems } from "../../data";
import { NavbarItem } from ".";
import { UIContext } from "../../context/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

    const { isNavbarOpen, toggleNavbar } = useContext(UIContext);

    return(
        <nav
            className={`fixed h-48 w-full bg-green-800 dark:bg-sky-700 text-white pt-4 ${ !isNavbarOpen ? '-top-36' : 'top-0' } duration-300`}
        >
            <div
                className="flex flex-col gap-5"
            >
                <div
                    className="hidden"
                >
                    <h1>Logo</h1>
                </div>

                <div
                    className="flex flex-col items-center"
                >
                    {
                        navbarItems.map(({ title, href }) => (
                            <NavbarItem key={title} title={title} href={ href } />
                        ))
                    }
                </div>

                <div
                    className="flex justify-center"
                >
                    <a onClick={ toggleNavbar } className="cursor-pointer">{ !isNavbarOpen ? <FontAwesomeIcon icon={ faBars } size="xl" className="active:animate-pulse" /> : <FontAwesomeIcon icon={ faCircleXmark } size="xl" className="active:animate-pulse" />}</a>
                </div>
            </div>
        </nav>
    );
}