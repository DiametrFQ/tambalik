import { Link, useLocation} from "react-router-dom";
import "./style.scss"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setMenuIsOpen } from "../../../../../store/redusers/settingsSlice";

interface IPropsLinkTo{
    path:string
    content:string
}

function LinkTo({path, content}:IPropsLinkTo) {
    const div = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch();

    const location = useLocation();
    const backgroundColor = 
        location.pathname === path
            ? "#FFC528"
            : "#E7DEC6" 
    
    return (
        <Link to={path}>
            <div 
                style={{ backgroundColor }} 
                ref={div}             
                onClick={
                    ()=>{
                        const menu :HTMLElement = document.querySelector(".menu")!
                        const can:HTMLElement|null = document.querySelector(".map > canvas")
                        menu.style.transform = "scale(0)";
                        menu.style.height = "0";
                        const side = window.innerWidth*0.55;

                        if(can){
                            can.style.top = `${250+side/11}px`
                        }

                        dispatch(setMenuIsOpen(true));
                    }
                }
            >

                {content}
            </div>
        </Link> 
    );
}

export default LinkTo;