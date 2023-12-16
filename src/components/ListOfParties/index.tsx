import { useEffect, useRef } from "react";
import "./style.scss"
import Partys from "../../Data/partys";

type pipeListOfParties = {
    partyNames: string[]//IPartys
}

function ListOfParties({partyNames}: pipeListOfParties) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() =>{
        const partys = Partys.getPartysOnSortedBy("par")

        const ctx = canvasRef.current!.getContext('2d')!;
        const coord = Partys.getCoordsCanvasFromPartyPowerBy("par")
        const width = 220
        canvasRef.current!.width  = width;
        canvasRef.current!.height = width; 
        // canvasRef.current!.style.width  = '800px';
        // canvasRef.current!.style.height = '600px';
        ctx.clearRect(0,0, 1000, 1000)
        partys.forEach((party, i) => {
            ctx.beginPath()
            ctx.strokeStyle = party.color.substring(4, 11)
            ctx.fillStyle = party.color.substring(4, 11)
            const center: [number, number] = [width/2, width/2]
            ctx.moveTo(...center)
            ctx.arc(...center, 75, coord[i], coord[i+1], true)
            ctx.lineTo(...center)
            ctx.fill()
        }) 

        }
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

