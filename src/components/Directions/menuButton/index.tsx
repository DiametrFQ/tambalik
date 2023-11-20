import { useSelector } from "react-redux";
import { RootState } from "../../../store/redusers/settingsSlice";
import "./style.scss"
import {useState} from "react"
function MenuButton() {
    const [isOpen, setOpen ]= useState<Boolean>(false)
    const canSolutionBeOpen = useSelector((state:RootState)=>state.settings).canMenuBeOpen
    return (
        <>
            <div 
                className='menuButton'
                
                onClick={()=>{
                    if(!canSolutionBeOpen) return
                    
                    const menu:HTMLElement = document.querySelector(".menu")!
                    const startMenuHeight = "317px" || "395px"

                    if(!isOpen){ 
                        menu.style.transform = "scale(0)";
                        menu.style.height = "0"
                    }
                    else {
                        menu.style.transform = "scale(1)";
                        menu.style.height = startMenuHeight
                    }

                    setOpen(isOpen => !isOpen)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                    <line y1="8.5" x2="22" y2="8.5" stroke="#83703F" strokeWidth="2"/>
                    <line y1="15.5" x2="22" y2="15.5" stroke="#83703F" strokeWidth="2"/>
                    <line y1="1.5" x2="22" y2="1.5" stroke="#83703F" strokeWidth="2"/>
                </svg>
            </div>
        </>
    );
}

export default MenuButton;