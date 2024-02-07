
import { useSelector } from "react-redux";
import ResourceScale from "../../components/ResourceScale";
import "./style.scss"
import { RootState, setDiscipline, setTax, setIndustry } from "../../store/redusers/inputsStateSlice";
import { RootState as RootStateRes } from "../../store/redusers/resursersSlice";

import { useDispatch } from "react-redux";
import { setActiveEconom } from "../../store/redusers/modelWindowSlice";
function Economy() {
    const {tax, discipline, industry} = useSelector((state:RootState)=> state.inputsState)
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
                    <div><img className="imgRes" src="img/resurses/money.svg" alt="" /> {resurses.money.toFixed()} 	&uarr;</div>
                    <div><img className="imgRes" src="img/resurses/person.svg" alt="" /> {resurses.people.toFixed()}</div>
                    <div><img className="imgRes" src="img/resurses/shest.svg" alt="" /> {resurses.economicPower.toFixed()}</div>
                    <div><img className="imgRes" src="img/resurses/fist.svg" alt="" /> {resurses.warPower.toFixed()}</div>
                </div>
            </div>

            <ResourceScale
                name="Налоги"
                imgHref="img/resurses/money.svg"
                value={tax}
                onChange={(num:number)=>{dispatch(setTax(num))}}
            />
            <ResourceScale 
                name="Дисц-на" 
                imgHref="img/resurses/fist.svg" 
                value={discipline}
                onChange={(num:number)=>{dispatch(setDiscipline(num))}}
            />
            <ResourceScale 
                name="Пром-ность" 
                imgHref="img/resurses/shest.svg" 
                value={industry}
                onChange={(num:number)=>{dispatch(setIndustry(num))}}
            />
            
        </>
    );
}

export default Economy;