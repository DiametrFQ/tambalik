import Party from "../components/PoliticsComponents/Party";
import PolitCanvas from "../components/PoliticsComponents/PolitCanvas";
import partys from "../Data/partys";
import { IParty } from "../Interfaces/IParty";
import Function from "../components/Function";
import { useCallback } from "react";


export function PoliticsPage() {
    
    return(
        <>
            <header className={`absolute ${partys[0].color} text-center text-[43px] h-[128px] w-[60%] border bord border-black left-[20%]`}>
                Абсолютная
                монархия
            </header>
            <div className="absolute top-[128px] h-[80%] grid grid-cols-[1fr_7fr_1fr] w-[100%]">
                <span/>
                <span className={`grid grid-cols-2 grid-rows-[minmax(64px,_3%)_303px_minmax(64px,_3%)_300px_repeat(${partys.length},_303px)] m-auto text-center text-[40px] min-w-[980px]`}>

                    { partys[0].politica === 'monarchist'
                        ?
                        <div className={`border border-black ${partys[0].color}`}> Король </div>
                        :
                        <div className={`border border-black ${partys[0].color}`}> Президент </div>
                    }
                    <div className={`border border-black ${partys[0].color}`}> Премьер </div>

                    <Party 
                        color={partys[0].color} 
                        politica={partys[0].politica} 
                        firstName={partys[0].firstName}  
                        lastName={partys[0].lastName} 
                        work={partys[0].work} 
                        par={partys[0].par}
                        pop={partys[0].pop}
                        key={partys[0].politica}
                    />

                    { partys[0].politica !== 'monarchist' && partys.reduce((sum, elem) => sum + elem.par, 0) > partys[1].par*2 &&
                        partys.reduce((sum, elem)=> sum + elem.par, 0) > partys[0].par *2
                        ?
                        <Party 
                            color={partys[1].color} 
                            politica={partys[1].politica}
                            firstName={partys[1].firstName} 
                            lastName={partys[1].lastName} 
                            work={partys[1].work} 
                            par={partys[1].par}
                            pop={partys[1].pop}
                            key={partys[1].politica}
                        />
                        :
                        <Party color={''}politica={''}firstName={'Запрещен'}lastName={''}work={''}par={0}pop={0}key={''}/>
                    }

                    <span className={`border border-black bg-[#8F9280]`}> Парламент </span>
                    <span className={`border border-black bg-[#8F9280]`}> Популярность </span>

                    <PolitCanvas priority="par"></PolitCanvas>
                    <PolitCanvas priority="pop"></PolitCanvas>

                    <Function func={useCallback(()=>{
                        partys.sort((a,b) => a.par > b.par ? -1 : 1)
                    },[])}/>

                    {partys.map((party: IParty) => (
                        <Party
                            color={`${party.color}`}
                            politica={party.politica} 
                            firstName={party.firstName} 
                            lastName={party.lastName} 
                            work={party.work} 
                            par={party.par}
                            pop={party.pop}
                            key={party.politica}
                        />
                    ))}
                </span>
                <span/> 
            </div>

        </>
    )
}