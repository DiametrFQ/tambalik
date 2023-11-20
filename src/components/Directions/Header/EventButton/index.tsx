import { useSelector } from "react-redux"
import "./style.scss"
import { RootState, setMenuBeOpen, setRandom, setSolutionBeOpen } from "../../../../store/redusers/settingsSlice"
import { useDispatch } from "react-redux"
function EventButton() {

  const level = useSelector((state:RootState)=>state.settings).level
  const canSolutionBeOpen = useSelector((state:RootState)=>state.settings).canSolutionBeOpen

  const dispatch = useDispatch()

  const visabilitySolution = () => {

    if(!canSolutionBeOpen) return

    setTimeout(()=>{
      dispatch(setRandom())
      dispatch(setSolutionBeOpen())
      dispatch(setMenuBeOpen())

      const solution: HTMLDivElement = document.querySelector(".solution")!
      const startMenuHeight = "445px"

      solution.style.transform = "scale(1)";
      solution.style.height = startMenuHeight;

      const menu :HTMLElement = document.querySelector(".menu")!
      menu.style.transform = "scale(0)";
      menu.style.height = "0"
    },0)
  }

  return (
    <div className='eventButton' onClick={visabilitySolution}>
      Уровень {level} &#9660;
    </div>
  );
}

export default EventButton;