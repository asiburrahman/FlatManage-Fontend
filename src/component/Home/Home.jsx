import Slider from '../Slider/Slider';
import { ToastContainer } from 'react-toastify';
import TypewriterText from '../Typewriter/TypewriterText';
import HomeCoupons from '../Pages/HomeCoupons';
import FeaturesSection from '../Pages/FeaturesSection';
import Testimonials from '../Pages/Testimonials';
import CallToAction from '../Pages/CallToAction';
import ReactSweper from '../Pages/ReactSweper';


const Home = () => {


    
    return (
        
        <div className='w-11/12 mx-auto'>
            <ToastContainer />
              {/* slider section  */}
            <section > 
               <Slider>
            
            </Slider>

            </section>

            <section className='p-2 text-center py-10'>
              <TypewriterText></TypewriterText>
            </section>

            <section>
              <HomeCoupons></HomeCoupons>
            </section>

            <section>
              <ReactSweper></ReactSweper>
            </section>

            

           

            <section>
                <FeaturesSection></FeaturesSection>
            </section>

            <section>
              <Testimonials></Testimonials>
            </section>

            <section>
              <CallToAction></CallToAction>
            </section>
           



           
    
    
          

              
              


            

            

           


          
           
        </div>
    );
};

export default Home;