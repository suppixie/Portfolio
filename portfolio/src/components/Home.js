import "@fontsource/linden-hill";
import "@fontsource/give-you-glory"; 
import './styles/Home.css';
import ME1 from '../assets/ME1.jpg';
import ME2 from '../assets/ME2.jpeg';
import ME3 from '../assets/ME3.jpeg';
import ME4 from '../assets/ME4.jpeg';
import ME5 from '../assets/ME5.jpeg';


function Home() {
  return (
    <div className="portfolio">
      <div className="header">
          <p>Portfolio</p>
      </div>
      <div className="intro">
          <div className='intro-container'>
          <div className="Mamtha-image">
            <img src={ME1} className='me1' alt='me'/>
            <p className="title">Product Designer</p>
          </div>

          <div className="intro-text">
            <p className="hello-text">Hey, I'm Mamtha Patalay</p>
            <p className="bio">The one you can rely on, to design everything with a personal touch, intuitively and creatively. </p>
          </div>
      </div>

      <div className='begin-story-line'>
        <p>Let's begin my story...</p>
      </div>


      <div className='about-me'>
          <div className='front-envelope'>       
            <p>Little bits of me!</p>
          </div>
          <img className='me2' src={ME2} alt='me'/>
          <p>I love working with different art mediums, i have tried most!</p>

          <img className='me3' src={ME3} alt='me'/>     
          <p>My favorite part of designing is making a Collage, even if its on a tshirt</p>   

          <img className='me4' src={ME4} alt='me'/>        
          <p>I'm a Postgraduate from Univerity of Limerick, Ireland</p>

          <img className='me5' src={ME5} alt='me'/>
          <p>I feel really content when im at beaches!</p>

            <div className='back-envelope'>
              <div className='envelope-flap'/> 
              <div className='envelope-backing'/> 
              </div>
       </div>

       <div className='projects'></div>

    </div>
                 </div>

  );
}
export default Home;