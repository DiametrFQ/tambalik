import { useEffect, useRef, useState } from "react";
import Solution from "../../components/Solution";
import "./style.scss"
import { useSelector } from "react-redux";
import { RootState } from "../../store/redusers/modelWindowSlice";
import Party from "../../Data/partys";
import { getCoord, hexDec } from "./service";
// declare module "*.png";
// import img from "./chels/chel-red.png"

function Map() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const can = useRef<HTMLCanvasElement>(null)!
    const peoples = useSelector((state: RootState)=> state.resurses.people)

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight)
    };

    useEffect(()=>{
        const side = windowWidth*0.55
        const ctx = can.current!.getContext('2d')!;
        can.current!.width = 256
        can.current!.height = 128
        can.current!.style.width = `${side}px`
        can.current!.style.height = `${side}px`
        can.current!.style.left = `${(windowWidth - side)/2-10}px`
        can.current!.style.top = `${250+side/11}px`

        let partys: {rgb: string, people: number}[] = Party
            .getPartyWithColorAndPersent('pop', Math.log10(peoples))
            .map((party) => {
                    const rgb = party[0].slice(1);
                    const people = +(party[1] * peoples/20 ).toFixed(0);

                    return {rgb, people}
                }
            )
        while (!partys.every((p) => p.people === 0)) {
            const random = Math.floor(Math.random() * partys.length);
            let party = partys[random];
        
            if (party.people === 0) {
                partys = partys.filter((p) => p.people > 0);
                continue;
            }
            party.people--;
        
            const coords = getCoord(104);
            const size: [number, number] = [40, 25];
        
            const img = new Image();
            img.src = `chels/chel_${party.rgb}.png`;

            img.onload = () => {
                ctx.drawImage(img, ...coords, ...size);
            };
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    },[windowWidth, windowHeight, can, peoples])
  
    return (
        <div className="map" rel="preload">
            {/* <img src="chels/chel_red.png" alt="chel" /> */}
            <canvas ref={can} />
            <Solution/>
        </div>
    );
}

export default Map;