import { useCallback, useEffect, useRef } from "react";
import partys from "../../Data/partys";

interface PolitCanvasProps {
    priority: string
}

export default function PolitCanvas( {priority} :PolitCanvasProps ) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() =>{
            const ctx = canvasRef.current!.getContext('2d')!;
            ctx.clearRect(0,0, 1000, 1000)
    
            let crdnt: number[] = priority === 'pop' 
            ? partys.map((elem) => elem.pop )! 
            : partys.map((elem) => elem.par )!
    
            crdnt.sort((a,b)=> a>b? -1 : 1).unshift(0)

            const sumAll = crdnt.reduce((sum, elem) => sum + elem, 0);
    
            crdnt = crdnt.map((elem, imap) => {
                const sumSome = crdnt.reduce((sum, elem, ired) => ired < imap+1 ? sum + elem : sum, 0)
                return 2 * Math.PI * ( 1 - (sumSome / sumAll))
            })

            priority === 'pop' 
            ? partys.sort((a,b) => a.pop > b.pop ? -1 : 1)
            : partys.sort((a,b) => a.par > b.par ? -1 : 1)
    
            partys.forEach((party, i) => {
                ctx.beginPath()
                ctx.strokeStyle = party.color.substring(4, 11)
                ctx.fillStyle = party.color.substring(4, 11)
                ctx.moveTo(145, 75)
                ctx.arc(145, 75, 65, crdnt[i], crdnt[i+1], true)
                ctx.lineTo(145, 75)
                ctx.fill()
            }) 
            partys.sort((a,b) => a.par > b.par ? -1 : 1)
        } 
    )

    return (
        <span className={`border border-x-black`}>
            <canvas
                ref={canvasRef}
                className={`w-[100%] h-[100%] p-auto m-auto`} 
            /> 
        </span>
    )
}