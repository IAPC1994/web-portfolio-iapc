import { useContext } from "react";
import { UIContext } from "../../context/ui";

interface Props {
    title:string;
    href : string;
}

export const NavbarItem = ({ title, href }:Props) => {
    
    const { toggleNavbar } = useContext(UIContext);

    return(
        <>
            <a href={ href } onClick={ toggleNavbar }>{ title }</a>
        </>
    );
}