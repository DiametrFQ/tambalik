import { useDispatch } from "react-redux"
import "./style.scss"
import { levelIncrement, setRandom } from "../../../store/redusers/settingsSlice"

type propsAnswer ={
    content: string
    move: Function
}

function Answer({content, move}: propsAnswer) {
    const dispatch = useDispatch()
    const hiddenSolution = () => {
        setTimeout(()=>{
            const solution: HTMLDivElement = document.querySelector(".solution")!
            const startMenuHeight = "0px"
      
            solution.style.transform = "scale(0)";
            solution.style.height = startMenuHeight;

            dispatch(levelIncrement())
            dispatch(setRandom())

            move()
            
          },0)
    }

    return (
        <div className="answer" onClick={hiddenSolution}>
            {content}
        </div>
    );

}

export default Answer;