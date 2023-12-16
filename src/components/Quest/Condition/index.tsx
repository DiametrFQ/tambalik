import { condition } from "../../../Services/types/TQuest";
import "./style.scss"
function Condition({conditionText, condition}:condition) {
    return (
       <>

        {condition 
            ? <>&#10003;</> 
            : <>&#10006;</>}
        <span className="conditionText">Условие: {conditionText}</span>
        <br />
       </>
    );
}

export default Condition;