import { IParty } from "../../Interfaces/IParty"

export default function Party({color, politica, firstName, lastName, work}: IParty) {

    return (
        <>
        { politica === 'monarchist'
            ?
            <div className={`border border-black ${color}`}> Король </div>
            :
            <div className={`border border-black ${color}`}> Президент </div>
        }
        </>

    )
}