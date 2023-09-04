import { IAnswer } from '@Interfaces/IAnswer';
import { useDispatch } from 'react-redux';
import { changeCheck } from '../../store/redusers/settingsSlice';

export default function Answer({content, func}: IAnswer) {
    //const btnBgClassName = (id === 3) ? 'bg-yellow-400' : 'my-[40px]'
    //const {setEventVar} = useContext(EventContext)
    const dispatch = useDispatch()

    const btnAnswerClasses = [
        'relative',
        //btnBgClassName,
        'bg-[#8F9280]',
        'text-center',
        'text-[48px]',
        'mt-[30px]',
        'border-[1px]',
        'border-black border-solid',
        'rounded-[16px]',
        'mx-auto',
        'w-[90%]',
    ]

    return (
        <div
            className={`${btnAnswerClasses.join(' ')}`} 
            onClick={ () => {
                func()
                dispatch(changeCheck())
            }} 
        >
            {content}
        </div>
    )
}
