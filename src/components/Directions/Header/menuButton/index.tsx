import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setMenuIsOpen } from "../../../../store/redusers/settingsSlice";
function MenuButton() {
    const { menuIsOpen } = useSelector((state:RootState)=>state.settings);
    const dispatch = useDispatch();
    return (
        <>
            <div 
                className='menuButton'
                
                onClick={ () => {
                    if(!menuIsOpen) return;

                    const menu = document.querySelector<HTMLElement>(".menu")!;
                    const can = document.querySelector<HTMLCanvasElement>(".map > canvas");
                    const side = window.innerWidth*0.55;
                    const countOfLinks = 5;
                    const indentation = 3;
                    const startMenuHeight = 
                        window.innerWidth > 344 
                            ? 86 * countOfLinks + indentation
                            : 120 + 86*(countOfLinks - 1) + indentation;

                    if(!menuIsOpen){ 
                        menu.style.transform = "scale(0)";
                        menu.style.height = "0";
                        if(can)
                            can.style.top = `${250 + side/11 }px`;
                        
                    }
                    else {
                        menu.style.transform = "scale(1)";
                        menu.style.height = startMenuHeight+"px";
                        if(can)
                            can.style.top = `${250 + startMenuHeight + side/11}px`;
                    }

                    dispatch(setMenuIsOpen(false));
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