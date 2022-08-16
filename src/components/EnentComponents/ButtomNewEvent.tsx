import { EventContext } from '../../context/EventContext';
import React, { useContext} from 'react';
import events from '../../Data/events';

function ButtomNewEvent() {
  const {eventVar, setEventVar} = useContext(EventContext)

  return (
    <button
      className='absolute h-[128px] w-[20%] right-0 top-0 bg-[#853131] text-center text-[89px]'

      onClick={ () => {
        if(!eventVar.Check){

          setEventVar(eventVar =>{
            eventVar.Num = (eventVar.Count === 0 ? 0 : Math.floor(Math.random() * events.length))
            eventVar.Count += 1
            eventVar.Check = !eventVar.Check
            return {...eventVar}
          })  
        }
      }}>
      {eventVar.Count}
    </button> 
  );
}

export default ButtomNewEvent;