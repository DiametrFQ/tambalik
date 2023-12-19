import './style.scss'
type pipeListOfParties = {
    partyNamesWithColor: {
        politica: string;
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
                            </span> {el.politica}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PartysList;

