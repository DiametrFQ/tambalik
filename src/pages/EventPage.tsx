import React, { useContext} from 'react';
import Events from '../components/EnentComponents/Events';
import events from '../Data/events';
import { EventContext } from '../context/EventContext';

export function EventPage() {
    const {eventVar} = useContext(EventContext)
    
    return (
        <div className='absolute top-[3%] grid grid-cols-[1fr_4fr_1fr] z-100 w-[100%]'> 
            <div />
            {eventVar.Check && <Events 
                Newspaper = {events[eventVar.Num].Newspaper}
                src = {events[eventVar.Num].src}
                content = {events[eventVar.Num].content}
                answers = {events[eventVar.Num].answers}
            />}
            <div />
        </div>
    );
}