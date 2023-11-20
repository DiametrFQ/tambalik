import Answer from "./Answer";
import "./style.scss"
import events from "../../Data/events";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redusers/settingsSlice";

function Solution() {
    const random = useSelector((state:RootState)=>state.settings).random;
    let event = events[random];

    return (
        <div className="solution">
            <header>
                {event.Newspaper}
            </header>
            
            <div className="content">
                {event.content}
            </div>

            {event.answers.map((el, ind) => {
                return <Answer key={ind} content={el.content!.toString()} move={() =>{
                    el.func()
                }}/>
            })}

        </div>

    );
}

export default Solution;