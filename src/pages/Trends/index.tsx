import { useDispatch, useSelector } from "react-redux";
import "./style.scss"
import { RootState } from "../../store/redusers/trendsSlice";
import { setActiveTrend } from "../../store/redusers/modelWindowSlice";
function Trends() {
    const {politicalParty, radicalism} = useSelector((state:RootState)=>state.trends)
    const dispatch = useDispatch()
    dispatch(setActiveTrend(false))
    return (
        <div className="trends">
            <div>
                <div>
                    Политическая партия:  
                </div>
                <span>
                    {politicalParty === "none"? "нет":politicalParty}
                </span> 
            </div>      

            <div>
                <div>
                    Радикализм:     
                </div>
                <span>
                    {radicalism.toFixed(2)}%
                </span> 
            </div>           
        </div>
    );
}

export default Trends;