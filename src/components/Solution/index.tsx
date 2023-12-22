import Answer from "./Answer";
import "./style.scss"
import Events from "../../Data/events";
import { TAnswer } from "../../Services/types/TAnswer";
// import {useEffect} from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../store/redusers/settingsSlice";
import { defeat, theEnd } from "./service";
import store from "../../store";
import Party from "../../Data/partys";
function Solution() {
    
    const {random} = useSelector((store:RootState) => store.settings)
    let event = Events.get()[random]
    const [isDefeat, eventDefeat] = defeat()
    
    if(isDefeat){
        event = eventDefeat
    }
    if(store.getState().settings.level === 100){
        event = theEnd(Party.getPartysOnSortedBy("par")[0].theEndText)
    }
    const move = (el:TAnswer) => {
        el.func()
    }

    return (
        <div className="solution">
            <header>
                {event.Newspaper}
            </header>
            
            <div className="content">
                {event.content}
            </div>

            {event.answers.map((el, ind) => 
                <Answer 
                    key={ind} 
                    content={el.content!.toString()} 
                    move={() => move(el)}/>
            )}

        </div>

    );
}

export default Solution;