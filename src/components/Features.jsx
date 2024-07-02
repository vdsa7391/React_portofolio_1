import {features} from '../constant';

const Features = () => {
  return (
    <>
    <div id='features' className="flex justify-start lg:flex-row flex-col mt-[150px]">

      <div className='lg:w-[60%]'>
        <h4 className="text-white text-[52px] font-bold ">
        You do the business,
        </h4>
        <h4 className="text-white text-[52px] font-bold"> we'll handle the money.</h4>
        
        <p className="font-poppins font-normal max-w-[470px] mt-5 text-dimWhite text-[18px] leading-[30.8px] ">With the right credit card, you can improve your 
          financial life by building credit, earning rewards and saving money. But with 
          hundreds of credit cards on the market.</p>

        <button className="rounded-[10px] bg-blue-gradient py-3 px-7 text-[18px] font-semibold mt-10">Get Started</button>
      </div>

      <div className='flex flex-col items-start justify-center lg:mt-0 : mt-[45px] lg:ml-[25px] ml-0'>
        {features.map((feature, index)=>(
          <div key={index} className='flex mb-[25px] justify-start items-center feature-card p-5 rounded-[20px]'>
            <div className="rounded-full bg-gray-gradient w-[60px] h-[60px] p-2 flex justify-center items-center ">
              <img src={feature.icon} alt={feature.id} className='h-[70%] w-[80%] object-contain ' />

            </div>

            <div className='flex flex-col justify-start ml-4'>
              <h4 className="text-white text-[20px] font-semibold">{feature.title}</h4>
              <p className="text-dimWhite text-[18px]">{feature.content}</p>

            </div>

          </div>
        ))}


      </div>
    </div>
    
    </>
  )
}

export default Features