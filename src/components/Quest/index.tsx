import { useRef, useState } from "react";
import "./style.scss"
// import Quests from "../../Data/quests";
import Condition from "./Condition";
import { TQuest } from "../../Services/types/TQuest";
type questProps = {
    quest:TQuest
}
function Quest({quest}:questProps) {

    const [isHidden, setHidden] = useState(false);
    const conditionRef = useRef<HTMLDivElement>(null)

    const visabilityCondition = () => {
        setHidden(isHidden => !isHidden)
        if (!isHidden) {
            conditionRef.current!.style.transform = "scaleY(0)";
            // conditionRef.current!.style.padding = "0 50px";
            conditionRef.current!.style.height = "0"
        }
        else {
            conditionRef.current!.style.transform = "scaleY(1)";
            conditionRef.current!.style.height = "100%"
            // conditionRef.current!.style.padding = "25px 50px";
        }
    }

    return (
        <div 
            className="quest"
            // style={{backgroundColor: quest.timeLeftToWork ? "#FFC528" : ""}}
        >   
            <div
                style={{gridTemplateColumns: quest.state ? "1fr 80px" : "1fr 110px"}}
                className="quest-name"
                onClick={visabilityCondition}>
                {quest.questName}

                {quest.conditions.every(el => el.condition) && 
                    !quest.timeLeftToWork &&
                <button style={{backgroundColor: quest.state ? "#D6D6D6" : ""}}
                    onClick={()=>{
                        // quest.timeLeftToWork = quest.workInterval
                        quest.state = true;
                    }}>
                    {quest.state ? "выполнено" : "забрать награду"}
                </button>}
                
            </div>

            <div ref={conditionRef} className="condition">
                {quest.conditions.map((el, index) => <Condition key={index} {...el}/>)}

                <div className="reward-text">Награда:
                    {quest.bonusText().map((el) => {
                        return (
                            <>
                            <span className="reward">
                                {el.reward}
                            </span>
                            <img className="imgRes" src={el.directory} alt="" />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Quest;

