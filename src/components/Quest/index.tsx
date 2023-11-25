import { useRef, useState } from "react";
import "./style.scss"
import partys from "./../../Data/partys";

function Quest() {

    const [isHidden, setHidden] = useState(false);
    const condition = useRef<HTMLDivElement>(null)

    const visabilityCondition = () => {
        setHidden(isHidden => !isHidden)
        if (!isHidden) {
            condition.current!.style.transform = "scaleY(0)";
            condition.current!.style.height = "0"
        }
        else {
            condition.current!.style.transform = "scaleY(1)";
            condition.current!.style.height = "100%"
        }
    }

    return (
        <div className="quest">
            <div
                className="quest-name"
                onClick={visabilityCondition}
            >
                Очень важная задача
            </div>

            <div ref={condition} className="condition">
                {partys.powerPersentParty("nationalist","par") > 0.1 
                ? <>&#10003; условие задачи выполнено</> 
                : <>&#10006; условие задачи невыполнен</>}
                <br />
{partys.powerPersentParty("nationalist","par")}

                &#10003; условие задачи
                <br />
                &#10006; asdasda
                <br />
                &#10006; asdasd
            </div>
        </div>
    );
}

export default Quest;

