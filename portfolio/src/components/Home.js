import "@fontsource/linden-hill";
import "@fontsource/give-you-glory"; 
import './styles/Home.css';
import { useEffect } from 'react';
import ME1 from '../assets/ME1.jpeg';
import ME2 from '../assets/ME2.jpeg';
import ME3 from '../assets/ME3.jpeg';
import ME4 from '../assets/ME4.jpeg';
import ME5 from '../assets/ME5.jpeg';


function Home() {
   useEffect(() => {
  const exhibits = document.querySelectorAll(".exhibit");
  const start = document.querySelector(".scroll-trigger.start");
  const end = document.querySelector(".scroll-trigger.end");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.target === start && entry.isIntersecting) {
          exhibits.forEach(el => el.classList.add("active"));
        }

        if (entry.target === end && entry.isIntersecting) {
          exhibits.forEach(el => el.classList.remove("active"));
        }
      });
    },
    { threshold: 0 }
  );

  if (start) observer.observe(start);
  if (end) observer.observe(end);
}, []);


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
        <p className="story-line">Let's begin my story...</p>
      </div>
</div>

      <div className='about-me'>

          <div className='front-envelope'>       
            <p>Little bits of me!</p>
            <div className="scroll-trigger start" />

          </div>
          <div className='exhibits'>
          <div className='exhibit exhibit1'>
              <img className='me2' src={ME2} alt='me'/>
              <p className="exhibit-text exhibit-text1">I love working with different art mediums, i have tried most!</p>
          </div>
          
          <div className='exhibit exhibit2'>
              <img className='me4' src={ME4} alt='me'/>        
              <p className="exhibit-text exhibit-text2">I'm a Postgraduate from Univerity of Limerick, Ireland</p>
          </div>

          <div className='exhibit exhibit3'>
              <img className='me5' src={ME5} alt='me'/>
              <p className="exhibit-text exhibit-text3">I feel really content when im at beaches!</p>
          </div>

          <div className='exhibit exhibit4'>
              <img className='me3' src={ME3} alt='me'/>     
              <p className="exhibit-text exhibit-text4">My favorite part of designing is making a Collage, even if its on a tshirt</p>   
          </div>

         </div>

            <div className='back-envelope'>
              <div className='envelope-flap'/> 
              <div className='envelope-backing'/> 
              
              </div>
       </div>
      <div className="scroll-trigger end" />

       <div className='projects'></div>

    </div>

  );
}
export default Home;