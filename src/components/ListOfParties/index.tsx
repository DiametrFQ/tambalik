import { useEffect, useRef } from "react";
import "./style.scss"
import Partys from "../../Data/partys";

type pipeListOfParties = {
    partyNames: string[]//IPartys
}

function ListOfParties({partyNames}: pipeListOfParties) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() =>{
        const partys = Partys
        const ctx = canvasRef.current!.getContext('2d')!;
        const coord = partys.getPartyPower("pop")

        ctx.clearRect(0,0, 1000, 1000)
        partys.get().forEach((party, i) => {
            ctx.beginPath()
            ctx.strokeStyle = party.color.substring(4, 11)
            ctx.fillStyle = party.color.substring(4, 11)
            ctx.moveTo(145, 75)
            ctx.arc(145, 75, 65, coord[i].value, coord[i+1].value, true)
            ctx.lineTo(145, 75)
            ctx.fill()
        }) 

        },[Partys.get()]
    )

    return (
        <div className="list-of-parties">
            <div>
                <div>
                    Рейтинг партий:
                </div>

                <div className="list">
                    {
                        partyNames.map((el, index) => {
                            return <div className="element" key={index}>{index+1} {el}</div>
                        })
                    }
                </div>
            </div>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default ListOfParties;

