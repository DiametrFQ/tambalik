// import { EventContext } from '../../context/EventContext';
import events from '../../Data/events';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState, changeCheck, changeNum, plusCount } from '../../store/redusers/settingsSlice';

function ButtomNewEvent() {
  const dispatch = useDispatch()
  const num = useSelector((state: RootState) => state.settings.Num);
  const check = useSelector((state: RootState) => state.settings.Check);
  const count = useSelector((state: RootState) => state.settings.Count);


  return (
    <button
      className='absolute h-[128px] w-[20%] right-0 top-0 bg-[#853131] text-center text-[89px]'

      onClick={ () => {
        if(!check){
          dispatch(changeNum())
          dispatch(changeCheck())
          dispatch(plusCount())
        }
        console.log(check)
      }}>
      {count}
    </button> 
  );
}

export default ButtomNewEvent;