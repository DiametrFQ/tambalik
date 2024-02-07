import "./style.scss"
import LinkTo from "./LinkTo";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/redusers/resursersSlice";
import { TChange } from "../../../../store/redusers/modelWindowSlice";

function plusMinus(polsit:boolean){
  return  (polsit ? String.fromCharCode(8593) + String.fromCharCode(8595) :"") 
}
function Menu() {
  const {map, polsit, econom, quest, trend} = useSelector((state: RootState)=> state.modelWindow)
  return (

      <div className="menu">
        <LinkTo path="/" content={ plusMinus(map) + " Карта"}  />
        <LinkTo path="/policy-situation" content={  plusMinus(polsit) + "  Политическая ситуация"} />
        <LinkTo path="/economy" content={ plusMinus(econom) + " Экономика"}  />
        {/* <LinkTo path="/foreign-policy" content="Внешняя политика" /> */}
        <LinkTo path="/tasks" content={ plusMinus(quest)+ "  Задачи"} />
        <LinkTo path="/trends" content={ plusMinus(trend)+ "  Тенденции"} />
      </div>
  );
}

export default Menu;