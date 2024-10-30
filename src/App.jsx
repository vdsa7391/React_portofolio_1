
import { BrowserRouter } from "react-router-dom";
import {Navbar , Hero, ActiveUsers,Feat, Billing,Review,Software,Footer} from './components';

const App = () => {
  // let's do this


  return (
    <>
  
    <BrowserRouter>

          <div className='bg-primary w-full overflow-hidden'>
              
                <div className=" lg:px-[100px] px-7">
                  <Navbar/>
                </div>

                <div className="lg:mt-[150px] mt-[25px]">
                  <Hero/>
                </div>

                <div className="lg:px-[100px] px-7  ">
                  <ActiveUsers/>
                  <Feat/>
                  <Billing/>
                  <Review/>
                  <Software/>
                  <Footer/>

                </div>


          </div> 

     </BrowserRouter>

 


     



     
    
    
    </>
  )
}

export default App 


