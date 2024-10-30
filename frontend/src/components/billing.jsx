
import {apple, google, bill,card} from '../assets';


const billing = () => {
  return (
    <>
    <div id='product' className="mt-[50px] flex justify-start lg:flex-row flex-col w-[90%]">
        <div className='lg:order-2 order-1'>
            <h4 className="text-white text-[52px] font-bold ">
            Easily control your billing & <br/>invoicing.
            </h4>
            <p className="font-poppins font-normal max-w-[470px] mt-5 text-dimWhite text-[18px] leading-[30.8px] ">
            We consider the payment methods you'll offer your customers when you start your business. This is an important
            part of managing your business cash flow and meeting your customer's needs.
            </p>
            <div className="flex mt-7">
                <img src={apple} alt=""></img>
                <img src={google} alt=""></img>
            </div>
        </div>
        <div className='lg:order-1 order-2 relative z-[5]'>
            <img src={bill} alt="billing" className='lg:mt-0 mt-[100px]' />
            <div className="rounded-full absolute top-0 left-0 bill_gradient z-[0] w-[50%] h-[50%]"></div>
            <div className="rounded-full absolute bottom-0 left-0 bill_gradient_2 z-[0] w-[50%] h-[50%]"></div>

        </div>


    </div>


    <div className="mt-[50px] flex justify-start lg:flex-row flex-col">
        <div className='lg:w-[70%] w-[100%]' >
            <h4 className="text-white text-[52px] font-bold ">
            Find a better card deal in <br/> few easy steps
            </h4>
            <p className="font-poppins font-normal max-w-[470px] mt-5 text-dimWhite text-[18px] leading-[30.8px] ">
            We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270
             Australian credit cards using our free tools. When you find one that suits, we'll take you securely to 
             the bank's website.
            </p>
            <button className="rounded-[10px] bg-blue-gradient py-3 px-7 text-[18px] font-semibold mt-10">Get Started</button>

        </div>
        <div className='lg:-mr-10 lg:pl-[50px] lg:h-[100%] lg:w-[70%]'>
            <img src={card} alt="card" className='lg:mt-0 mt-[70px]' />
            
        </div>

        


    </div>

    
    </>
  )
}

export default billing