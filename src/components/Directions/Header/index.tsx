import { Link } from "react-router-dom";
import MenuButton from "../menuButton";
import EventButton from "./EventButton";
import "./style.scss";

function Header() {
    return (
        <div className="header">
           
            <MenuButton />

            <Link to="/">       
                <EventButton />
            </Link>

        </ div>
    );
}

export default Header;