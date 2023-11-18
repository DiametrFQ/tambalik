import Answer from "./Answer";
import "./style.scss"
import events from "../../Data/events";

function Solution() {
    const random = Math.round(Math.random()*(events.length-1))
    const event = events[random]
    return (
        <div className="solution">
            <header>
                {event.Newspaper}
            </header>
            
            <div className="content">
                {event.content}
            </div>

            {event.answers.map((el, ind) => {
                return <Answer key={ind} content={el.content!.toString()} move={el.func}/>
            })}

        </div>

    );
}

export default Solution;