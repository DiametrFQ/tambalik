import { useSelector } from "react-redux"
import "./style.scss"
import { RootState, setMenuBeOpen, setSolutionBeOpen, setRandom,} from "../../../../store/redusers/settingsSlice"
import { useDispatch } from "react-redux"
import { economicImpact, questsBonus } from "./service"
import Events from "../../../../Data/events"

function EventButton() {

  const {level, canSolutionBeOpen} = useSelector((state:RootState)=>state.settings)
  const dispatch = useDispatch()

  const visabilitySolution = () => {

    if(!canSolutionBeOpen) return

    setTimeout(()=>{
      dispatch(setRandom(Events.get().length))
      dispatch(setSolutionBeOpen())
      dispatch(setMenuBeOpen())
      // console.log(Party.get())
      economicImpact()
      questsBonus()

      const startMenuHeight = "445px"

      const solution: HTMLDivElement = document.querySelector(".solution")!
      solution.style.transform = "scale(1)";
      solution.style.height = startMenuHeight;

      const menu :HTMLElement = document.querySelector(".menu")!
      const can:HTMLElement|null = document.querySelector(".map > canvas")
      const side = window.innerWidth*0.55
      
      if(can){
        can.style.top = `${250+side/11}px`
      }
      menu.style.transform = "scale(0)";
      menu.style.height = "0"
    })
  }

  return (
    <div className='eventButton' onClick={visabilitySolution}>
      Уровень {level} &#9660;
    </div>
  );
}

export default EventButton;