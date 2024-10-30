import { feedback } from "../constant"
import {quotes} from '../assets';

const review = () => {
  return (
    <>
    <div id="clients" className="mt-[100px] flex xs:flex-col lg:mr-[200px] mr-[50px]">
        <div className=" flex lg:flex-row flex-col justify-between">
            <h4 className="text-white text-[52px] font-bold max-w-[450px]">What people are saying about us</h4>
            <p className="font-poppins font-normal max-w-[470px] mt-5 text-dimWhite text-[18px] leading-[30.8px] lg:mt-[50px]">
            Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>

        <div className="mt-[125px] flex lg:flex-row flex-col lg:ml-[150px] justify-end ml-0">
            
            {feedback.map((feed, index)=>(
                <div key={index} className= {`lg:flex-row flex-col  items-start justify-center feedback-card p-[35px] rounded-[25px] object-contain w-[350px] mb-9`} >
                    <img src={quotes} alt="quotes" className="h-[25px] mb-10"/>
                    <div className= {`text-[18px] text-white  w-[280px] font-poppins font-normal leading-[30.8px] ${ index===1 ? "mt-[55px] mb-[55px]" : "mt-0"}     `} >{feed.content}</div>
                    <div className="flex mt-10">
                        <img src={feed.img} alt="person" className="h-[50px] mr-4" />
                        <div className="flex-col text-[18px] ">
                            <h6 className="text-white font-bold text-[18px]">{feed.name}</h6>
                            <p className="text-dimWhite">{feed.title}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>

    </div>
    
    
    </>
  )
}

export default review