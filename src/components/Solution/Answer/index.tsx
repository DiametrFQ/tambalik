import { useSelector } from "react-redux"
import "./style.scss"
import { RootState, levelIncrement, setMenuBeOpen, setMenuIsOpen, setSolutionBeOpen } from "../../../store/redusers/settingsSlice"
import { useDispatch } from "react-redux"

type propsAnswer ={
    content: string
    move: Function
}

function Answer({content, move}: propsAnswer) {
    
    const canSolutionBeOpen = useSelector((state:RootState)=>state.settings).canSolutionBeOpen
    const dispatch = useDispatch()

    const hiddenSolution = () => {
        if(canSolutionBeOpen) return

        const solution: HTMLDivElement = document.querySelector(".solution")!
        const startMenuHeight = "0px"
    
        solution.style.transform = "scale(0)";
        solution.style.height = startMenuHeight;

        dispatch(setSolutionBeOpen())
        dispatch(setMenuBeOpen())
        dispatch(setMenuIsOpen(true))
        dispatch(levelIncrement())
        move()
    }

    return (
        <div className="answer" onClick={hiddenSolution}>
            {content}
        </div>
    );

}

export default Answer;