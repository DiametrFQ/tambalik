import { useDispatch } from "react-redux";
import partys from "../../Data/partys";
import ListOfParties from "../../components/ListOfParties";
import { setActivePolsit } from "../../store/redusers/modelWindowSlice";
import "./style.scss"

function PolicySituation() {
    const dispatch = useDispatch()
    dispatch(setActivePolsit(false))
    return (
        <div >
            <div className="policy-situation-info">
                <div>
                    <div>
                        Текущая форма правления:
                    </div>
                    <span>
                        Абсолютная монархия
                    </span>
                </div>
                <img src="" alt="" />
            </div>
            <div className="leaders-info">
                <div className="head leader">
                    <div>
                        Король(ева):
                    </div>
                    <span className="value">
                        {partys.getLeader()}
                    </span>
                </div >
                <div className="head premier">
                    <div>
                        Премьер:
                    </div>
                    <span className="value">
                        {partys.get()[0].par}
                    </span>
                </div>
            </div>
            {/* {partys.map((el)=> {

                <ListOfParties partys={["Фотоублюдки","Aфриканцы","Абобы"]}/>
                return <div>{el.politica}</div>
            })} */}
            <ListOfParties partyNames={partys.getPartysNameSortedBy("par")}/>
        </div>
    );
}

export default PolicySituation;