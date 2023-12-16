
import { useSelector } from "react-redux";
import ResourceScale from "../../components/ResourceScale";
import "./style.scss"
import { RootState, setDiscipline, setTax } from "../../store/redusers/inputsStateSlice";
import { RootState as RootStateRes } from "../../store/redusers/resursersSlice";

import { useDispatch } from "react-redux";
import { setActiveEconom } from "../../store/redusers/modelWindowSlice";
function Economy() {
    const {tax, discipline} = useSelector((state:RootState)=> state.inputsState)
    const resurses = useSelector((state:RootStateRes)=> state.resurses)

    const dispatch = useDispatch()
    dispatch(setActiveEconom(false))

    return (
        <>
            <div className="resurs-header">
                <div className="right">
                    Ваши ресурсы:
                </div>
                <div className="resurses">
                    <div><img className="imgRes" src="img/money.svg" alt="" /> {resurses.money.toFixed()} 	&uarr;</div>
                    <div><img className="imgRes" src="img/person.svg" alt="" /> {resurses.people.toFixed()}</div>
                    <div><img className="imgRes" src="res" alt="" /> {resurses.economicPower.toFixed()}</div>
                    <div><img className="imgRes" src="img/fist.svg" alt="" /> {resurses.warPower.toFixed()}</div>
                    <div><img className="imgRes" src="res" alt="" /> 100</div>
                    <div><img className="imgRes" src="res" alt="" /> 100</div>
                </div>
            </div>

            <ResourceScale
                name="Налоги"
                imgHref="img/money.svg"
                value={tax}
                onChange={(num:number)=>{dispatch(setTax(num))}}
            />
            <ResourceScale 
                name="Дисц-на" 
                imgHref="img/fist.svg" 
                value={discipline}
                onChange={(num:number)=>{dispatch(setDiscipline(num))}}
            />
            
        </>
    );
}

export default Economy;