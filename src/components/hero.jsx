import { robot,discount,getStarted } from "../assets"

const hero = () => {
  return (
    <>
    <div id="home" className="hero_sect w-full flex lg:flex-row flex-col">

        <div className="hero_content flex-col lg:w-[50%] full lg:pl-[100px] pl-7 ">
          
          <div className="flex bg-discount-gradient p-2 rounded-[10px] flex-none w-[380px] ">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
              <span className="text-white">20% </span>
               Discount For
              <span className="text-white"> 1 Month </span>
              Account
            </p>
          </div>

          <div className="flex justify-start items-start">
            <div className="flex flex-col mt-3 flex-1 font-poppins font-semibold 
            md:text-[72px] text-[52px] text-white md:leading-[100px] leading-[75px]">
              The Next
              <span className="text-gradient">Generation</span>
            </div>
            
            <img src={getStarted} alt="GetStarted" className={`md:flex hidden h-[50%] mr-7 mt-10`} />
          </div>

          <div className="font-poppins font-semibold 
           md:text-[72px] text-[52px] text-white md:leading-[100px] leading-[75px] md:mt-0 -mt-1">
              Payment <span className="md:inline block"> Method</span>

          </div>

          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]  mt-5 md:max-w-[470px] max-w-[410px]">
          Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>

          
        </div>

        <div className="robot lg:w-[50%] full  lg:mt-0 mt-10 relative">
          <img src={robot} alt="" className="h-full z-[5] " />
           
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          
        </div>

        <div className="md:hidden flex items-center justify-center mt-7">
          <img src={getStarted} alt="GetStarted"  />

        </div>
    </div>


    </>
  )
}

export default hero