
import { useDispatch } from "react-redux";
import quests from "../../Data/quests";
import Quest from "../../components/Quest";
import "./style.scss"
import { setActiveQuest } from "../../store/redusers/modelWindowSlice";
function Quests() {
    
    const dispatch = useDispatch()
    dispatch(setActiveQuest(false))

    return (

        <div className="Quests">
            {quests.get().map((el, index) => { return el.conditionHidden() && 
            <Quest key={index} quest={el}/>})}
        </div>

    );
}

export default Quests;