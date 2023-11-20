import { useSelector } from "react-redux"
import "./style.scss"
import { RootState } from "../../../../store/redusers/settingsSlice"
function EventButton() {

  const level = useSelector((state:RootState)=>state.settings).level

  const visabilitySolution = () => {

    setTimeout(()=>{
      const solution: HTMLDivElement = document.querySelector(".solution")!
      const startMenuHeight = "445px"

      solution.style.transform = "scale(1)";
      solution.style.height = startMenuHeight;

    },0)
  }

  return (
    <div className='eventButton' onClick={visabilitySolution}>
      Уровень {level} &#9660;
    </div>
  );
}

export default EventButton;