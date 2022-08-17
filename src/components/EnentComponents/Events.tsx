import Answer from './Answer';
import { IEvents } from '../../Interfaces/IEvent';

export default function Events({ Newspaper, src, content, answers}: IEvents ) {

    return (
        <div className='z-100 bg-[#D5E29D] border-solid border-black border-[1px] rounded-[16px] top-[10px] mx-auto py-[3%] min-w-[600px]'>
            <div className="text-[64px] bg-[#E7E5B7] text-center mx-auto rounded-[16px] w-[90%] mt-[2%]">
                {Newspaper}
            </div>
            <img className=" mx-auto m-[30px] rounded-[16px] w-[90%]" src={src} alt="" />
            <div className="bg-[#D5E29D] text-[32px] mx-auto w-[90%]">
                {content}
            </div>
            <>{answers.map((answer, index) => (
                <Answer
                    content={answer.content}
                    func={ () => answer.func()}
                    key={index}
                />
            ))}</>
        </div>
    )
}
