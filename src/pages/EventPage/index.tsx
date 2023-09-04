import Events from '../../components/EnentComponents/Events';
import events from '../../Data/events';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redusers/settingsSlice';

export function EventPage() {
    const num = useSelector((state: RootState) => state.settings.Num);
    const check = useSelector((state: RootState) => state.settings.Check);

    const event = events[num]
    
    return (
        <div className='absolute top-[3%] grid grid-cols-[1fr_4fr_1fr] z-100 w-[100%]'> 
            <div />
            {check && <Events 
                Newspaper = {event.Newspaper}
                src = {event.src}
                content = {event.content}
                answers = {event.answers}
            />}
            <div />
        </div>
    );
}