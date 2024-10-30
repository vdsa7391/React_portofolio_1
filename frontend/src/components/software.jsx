import {airbnb, binance, coinbase, dropbox} from '../assets';

const software = () => {
  return (
    <div className='mt-[50px] flex flex-col w-full' >
        <div className="flex w-full justify-start items-center mx-0 ">
            <div className='p-1 h-[100px] w-[260px] object-contain lg:mr-[75px]'>
            <img src={airbnb} alt="helllo" className="lg:pb-[50px] pb-[15px] object-contain h-[100px] lg:w-[200px] w-[125px] " />
            </div>
            <div className='p-1 h-[100px] w-[260px] object-contain  lg:mr-[75px]'>
            <img src={binance} alt="helllo" className="lg:pb-[50px] pb-[15px] object-contain h-[100px] lg:w-[200px] w-[125px]" />
            </div>
            <div className='p-1 h-[100px] w-[260px] object-contain lg:mr-[75px]'>
            <img src={coinbase} alt="helllo" className="lg:pb-[50px] pb-[15px] object-contain h-[100px] lg:w-[200px] w-[125px]" />
            </div>
            <div className='p-1 h-[100px] w-[260px] object-contain lg:mr-[75px]'>
            <img src={dropbox} alt="helllo" className="lg:pb-[50px] pb-[15px] object-contain h-[100px] lg:w-[200px] w-[125px]" />
            </div>

       


        </div>

        <div className="flex lg:flex-row flex-col bg-black-gradient-2 items-center lg:justify-between p-7 rounded-[25px] box-shadow">
            <div>
                <h4 className="text-white text-[50px] font-bold ">
                    Come try our service now!
                </h4>
                <p className="font-poppins font-normal max-w-[470px] mt-5 text-dimWhite text-[18px] leading-[30.8px] ">
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>

            </div>
                
            <button className="rounded-[10px] bg-blue-gradient py-3 px-7 text-[18px] font-semibold mt-10">Get Started</button>

        </div>
    
    
    </div>
  )
}

export default software