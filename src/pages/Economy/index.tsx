
import { useSelector } from "react-redux";
import ResourceScale from "../../components/ResourceScale";
import "./style.scss"
import { RootState, setDiscipline, setTax } from "../../store/redusers/inputsStateSlice";
import { useDispatch } from "react-redux";
function Economy() {
    const inputsState = useSelector((state:RootState)=> state.inputsState)
    const dispatch = useDispatch()
    return (
        <>
            <div className="resurs-header">
                <div className="right">
                    Ваши ресурсы:
                </div>
                <div className="resurses">
                    <span><img className="imgRes" src="res" alt="" /> 100</span>
                    <div><img className="imgRes" src="res" alt="" /> 100</div>
                    <div><img className="imgRes" src="res" alt="" /> 100</div>
                    <div><img className="imgRes"src="res" alt="" /> 100</div>
                    <div><img className="imgRes"src="res" alt="" /> 100</div>
                    <div><img className="imgRes"src="res" alt="" /> 100</div>

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