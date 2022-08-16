import { IParty } from "../../Interfaces/IParty"

export default function Party({color, politica, firstName, lastName, work}: IParty) {

    return (
        <div className={`border border-black h-[303px] grid grid-rows-[64px_1fr]`}>
            <div className={`${color}` }>
                {politica}
            </div>
            <span className={`grid grid-cols-[1fr_1fr] grid-rows-[minmax(40px,_3fr)_1fr]`}>
                <img className={` bg-black`} src="" alt="" />
                <span className={` text-[56px]`}>
                    {firstName}
                    <br /> 
                    {lastName}
                </span>
                <div className={` grid-cols-1 bg-white `}> {work} </div>
                <span className={` bg-[#520000]`}> </span>
            </span>
        </div>
    )
}
