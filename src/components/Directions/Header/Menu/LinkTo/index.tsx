import { Link, useLocation} from "react-router-dom";
import "./style.scss"
import { useRef } from "react";

interface IPropsLinkTo{
    path:string
    content:string
}

function LinkTo({path, content}:IPropsLinkTo) {
    const div = useRef<HTMLDivElement>(null)

    const location = useLocation();
    const backgroundColor = location.pathname === path?"#FFC528":"#E7DEC6" 
    
    return (
        <Link to={path}>
            <div 
                style={{ backgroundColor }} 
                ref={div}             
                onClick={
                    ()=>{
                        const menu :HTMLElement = document.querySelector(".menu")!
                        menu.style.transform = "scale(0)";
                        menu.style.height = "0"
                    }
                }
            >

                {content}
            </div>
        </Link> 
    );
}

export default LinkTo;