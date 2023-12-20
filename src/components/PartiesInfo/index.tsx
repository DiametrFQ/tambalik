import { useEffect, useRef } from "react";
import "./style.scss"
import Partys from "../../Data/partys";
import PartysList from "./PartysList";

type pipeListOfParties = {
    partyNames: string[]//IPartys
}

function PartiesInfo({partyNames}: pipeListOfParties) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const partys = Partys.getPartysOnSortedBy("par")
    useEffect(() =>{

        const ctx = canvasRef.current!.getContext('2d')!;
        const coord = Partys.getCoordsCanvasFromPartyPowerBy("par")
        const width = 220
        canvasRef.current!.width  = width;
        canvasRef.current!.height = width; 
        // canvasRef.current!.style.width  = '800px';
        // canvasRef.current!.style.height = '600px';
        const center: [number, number] = [width/2, width/2]
        const radius = 90
        const subRadius = radius-35
        
        ctx.clearRect(0,0, 1000, 1000)
        partys.forEach((party, i) => {
            ctx.beginPath()
            ctx.strokeStyle = party.color.substring(4, 11)
            ctx.fillStyle = party.color.substring(4, 11)
            ctx.moveTo(...center)
            ctx.arc(...center, radius, coord[i], coord[i+1], true)
            ctx.lineTo(...center)
            ctx.fill()
        }) 
        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.arc(...center, subRadius, 0, Math.PI * 2, true); // Левый глаз
        ctx.fill()
        ctx.fillStyle = "#c0b49380"
        ctx.arc(...center, subRadius, 0, Math.PI * 2, true); // Левый глаз
        ctx.fill()

        }
    )

    return (
        <div className="list-of-parties">
            <div>
                <div className="title">
                    Рейтинг партий:
                </div>

                <PartysList 
                    partyNamesWithColor={Partys.getNamesPartyswithColor()}/>
            </div>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default PartiesInfo;

