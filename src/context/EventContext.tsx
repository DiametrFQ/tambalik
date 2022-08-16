import { createContext, useState  } from "react";

interface IEventContext {
    eventVar: {
        Check: boolean;
        Count: number;
        Num: number;
    }
    setEventVar: React.Dispatch<React.SetStateAction<{
        Check: boolean;
        Count: number;
        Num: number;
    }>>
}

export const EventContext = createContext<IEventContext>({
    eventVar: {
        Check: false,
        Count: 0,
        Num: 0
    },
    setEventVar(){}
})

export const EventState = ({children}: {children: React.ReactNode}) => {

    const [eventVar, setEventVar] = useState({
        Check: false,
        Count: 0,
        Num: 0
    });

    return(
        <EventContext.Provider value={ {eventVar, setEventVar}}>
            { children }
        </EventContext.Provider>  
    )
}