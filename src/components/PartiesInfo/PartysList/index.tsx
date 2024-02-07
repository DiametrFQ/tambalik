import Party from '../../../Data/partys';
import { partysNames } from '../../../Services/types/TParty';
import './style.scss'
type pipeListOfParties = {
    partyNamesWithColor: {
        politica: partysNames;
        title: string
        color: string;
    }[]
}

function PartysList({partyNamesWithColor}: pipeListOfParties) {

    return (
        <div className="list">
            {
                partyNamesWithColor.map((el, index) => {
                    return (              
                        <div className="element" key={index}>
                            <span 
                                className="colorParty" 
                                style={{
                                    backgroundColor: el.color,
                                    color: el.color,
                                }} 
                                >i
                            </span> {el.title} <span className='persent'>{(Party.getPowerPersentParty(el.politica, "par")*100).toFixed()}%</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PartysList;

