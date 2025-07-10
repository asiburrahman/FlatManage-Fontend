import Slider from '../Slider/Slider';
import { ToastContainer } from 'react-toastify';
import CountUp from 'react-countup';
import TypewriterText from '../Typewriter/TypewriterText';
import ReactSweper from '../Swiper/ReactSweper';
import { Link } from 'react-router';
import SocialImpact from '../Pages/SocialImpact';
import Impact from '../Pages/Impact';
import HomeHowItWorks from '../Pages/HomeHowItWorks';
import CallAction from '../Pages/CallAction';
import Role from '../hooks/Role';
import UseAuth from '../hooks/UseAuth';
import HomeCoupons from '../Pages/HomeCoupons';


const Home = () => {


    
    return (
        
        <div className='w-11/12 mx-auto'>
            <ToastContainer />
{/* slider section  */}
            <section > 
               <Slider>
            
            </Slider>

            </section>

            <section>
              <HomeCoupons></HomeCoupons>
            </section>

            <section className='p-2 text-center py-10'>
              <TypewriterText></TypewriterText>
            </section>
           



            <h2 className="text-2xl lg:text-4xl font-bold py-3 text-center">
    Find a Meal Nearby</h2>

    
    
    
            <div className='p-4 mt-6 w-7/12 mx-auto text-center'>
                  <Link to='availableFood' className="btn btn-primary rounded-full text-xl font-medium p-4  shadow-md ">
          
          Show All Food
        </Link>
            </div>

                <section className='p-1 py-10'>
                <ReactSweper></ReactSweper>
              </section>
              {/* Social Impact Section  */}
              <section className='p-1 py-10 '>
                <SocialImpact></SocialImpact>
              </section>
              <section className='p-1 py-10'>
                <HomeHowItWorks></HomeHowItWorks>
              </section>
            <section className='p-1 py-10'>


              {/* card slider section  */}
           
            <div className="bg-white py-16  px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative space-y-4">
          <div className=" rounded-xl overflow-hidden shadow-xl">
            <img
              src="./hungry3.jpg"
              alt="Check-in device"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-1 lg:flex gap-2 lg:space-x-4">
            <div className="  overflow-hidden shadow-xl flex-1 ">
            <img
                src="./hungry2.jpg"
                alt="Event badge pickup"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="  overflow-hidden shadow-xl flex-1">
              <img
                src="./hungry1.jpg"
                alt="Event badge pickup"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Your small action today can make a big difference in someone’s life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-700"><CountUp duration={10} end={1000000} />+</h3>
              <p className="text-gray-600 text-sm">Hungry People In Bangladesh</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700"><CountUp duration={10} end={200000} />+</h3>
              <p className="text-gray-600 text-sm">Homeless People</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700"><CountUp duration={10} end={9500000} />+</h3>
              <p className="text-gray-600 text-sm">Poor People</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
            </section>

            <section className='p-1 py-10'>
              <Impact></Impact>
            </section>

            <section className='p-1 py-10'>
              <CallAction></CallAction>
            </section>


          
           
        </div>
    );
};

export default Home;