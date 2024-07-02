import {logo} from '../assets';
import {footerLinks,socialMedia} from '../constant';

const footer = () => {
  return (
    <div className='flex flex-col items-start justify-center'>

    <div className=' mt-[100px] flex justify-center items-start lg:flex-row flex-col mb-8 w-full '>

        <div className="flex flex-col mb-[45px]">
            <img src={logo} alt="logo" className='h-[75px] w-[225px]' />
            <p className="font-poppins font-normal w-[300px] mt-5 text-dimWhite text-[18px] leading-[30.8px]">
            A new way to make payments easy, reliable and secure.
            </p>
        </div>

        <div className=' w-full flex flex-row lg:justify-end justify-start flex-wrap  ' >

            {footerLinks.map((item,index)=>(
                
                    <div key={index} className='flex flex-col mb-[45px] lg:pr-[150px] pr-[80px] '>
                        <li className="text-white text-[18px] mb-2 list-none font-semibold font-poppins leading-[30.8px]">{item.title}</li>
                        {item.links.map((link, index)=>(
                            <li className="text-dimWhite text-[16px] mb-2 list-none font-poppins font-normal leading-[30.8px]" key={index}><a href={link.link}>{link.name}</a></li>
                        ))}

                    </div>
                
            ))};

        </div>



    
    </div>

    <hr className='w-full mb-[20px]'/>
    <div className=" flex  w-full lg:flex-row flex-col  lg:justify-between lg:text-start text-center mb-5">
        <p className='font-poppins font-semibold text-[18px] text-white lg:w-[450px]'>2022 HooBank. All Rights Reserved.</p>


        <div className='flex justify-center items-center w-full lg:my-0 my-5 lg:justify-end'>
            {socialMedia.map((i,index)=>(
                <div key={index} className='h-[35px] w-[35px]'>
                    <img src={i.icon} alt={i.id} className='h-[35px] w-[35px] pr-3' onClick={()=>window.open(i.link)} />
                </div>
            ))}
        </div>
    </div>


    </div>

    

  )
}

export default footer