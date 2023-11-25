
import { useSelector } from "react-redux";
import ResourceScale from "../../components/ResourceScale";
import "./style.scss"
import { RootState, setDiscipline, setTax } from "../../store/redusers/inputsStateSlice";
import { RootState as RootStateRes } from "../../store/redusers/resursersSlice";

import { useDispatch } from "react-redux";
function Economy() {
    const inputsState = useSelector((state:RootState)=> state.inputsState)
    const resurses = useSelector((state:RootStateRes)=> state.resurses)

    const dispatch = useDispatch()
    return (
        <>
            <div className="resurs-header">
                <div className="right">
                    Ваши ресурсы:
                </div>
                <div className="resurses">
                    <div><img className="imgRes" src="res" alt="" /> {resurses.money}</div>
                    <div><img className="imgRes" src="res" alt="" /> {resurses.people}</div>
                    <div><img className="imgRes" src="res" alt="" /> {resurses.economicPower}</div>
                    <div><img className="imgRes" src="res" alt="" /> {resurses.warPower}</div>
                    <div><img className="imgRes" src="res" alt="" /> 100</div>
                    <div><img className="imgRes" src="res" alt="" /> 100</div>
                </div>
            </div>

            <ResourceScale
                name="Налоги"
                imgHref="#"
                value={inputsState.tax}
                onChange={(num:number)=>{dispatch(setTax(num))}}
            />
            <ResourceScale 
                name="Дисц-на" 
                imgHref="#" 
                value={inputsState.discipline}
                onChange={(num:number)=>{dispatch(setDiscipline(num))}}
            />
            
        </>
    );
}

export default Economy;