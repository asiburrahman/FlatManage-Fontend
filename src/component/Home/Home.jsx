import Slider from '../Slider/Slider';
import { ToastContainer } from 'react-toastify';
import TypewriterText from '../Typewriter/TypewriterText';
import { Link } from 'react-router';
import Impact from '../Pages/Impact';
import HomeHowItWorks from '../Pages/HomeHowItWorks';
import CallAction from '../Pages/CallAction';
import HomeCoupons from '../Pages/HomeCoupons';
import HomeApartment from '../Pages/HomeApartment';


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

            <section className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <HomeApartment></HomeApartment>
            </section>
    
    
            <div className='p-4 mt-6 w-7/12 mx-auto text-center'>
                  <Link to='availableFood' className="btn btn-primary rounded-full text-xl font-medium p-4  shadow-md ">
          
          Show All Food
        </Link>
            </div>

              
              <section className='p-1 py-10'>
                <HomeHowItWorks></HomeHowItWorks>
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