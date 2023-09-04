import { IParty } from "@Interfaces/IParty"

interface party{
    Party:IParty
}

export default function Party({Party}:party) {
    return (
        <div className={`border border-black h-[303px] grid grid-rows-[64px_1fr]`}>
            <div className={`${Party.color}` }>
                {Party.politica}
            </div>
            <span className={`grid grid-cols-[1fr_1fr] grid-rows-[minmax(40px,_3fr)_1fr]`}>
                <img className={` bg-black`} src="" alt="" />
                <span className={` text-[56px]`}>
                    {Party.firstName}
                    <br /> 
                    {Party.lastName}
                </span>
                <div className={` grid-cols-1 bg-white `}> {Party.work} </div>
                <span className={` bg-[#520000]`}> </span>
            </span>
        </div>
    )
}
