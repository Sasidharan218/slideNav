import Menucontent from './menu';
import React, { useContext } from 'react';
import { SlideContext } from './slidecontext';
import './components.css'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';


const HomePage = () => {
  
  const { activeLevel, finishedLevels, setActiveLevel, setSlide,setActiveSlideIndex,
    hidden,setFinishedLevels,
    setHidden, index, setIndex} = useContext(SlideContext);


  const slides = [
    {
      id: 1,
      content: "Content1",
     
    },
    {
      id: 2,
      content: "Content2",
     
    },
    {
      id: 3,
      content: "Content3",
     
    },
    {
      id: 4,
      content: "Content4",
     
    },
    {
      id: 5,
      content: "Content5",
     
    },
  ];

  const handleClick = ( index) => {
    
    setSlide(slides.find((slide)=> slide.id === index))
    setIndex(index)
    setHidden(true)
  };

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, slides.length ));
    setFinishedLevels(prevLevels => [...prevLevels, activeLevel ]);
    setActiveLevel( index + 1)
  };

  const handleBack = () => {
    if(index > 1){
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleFinish = () => {
    if (!finishedLevels.includes(activeLevel)) {
      setFinishedLevels(prevLevels => [...prevLevels, activeLevel]);
    }
    if(activeLevel === index){
      setActiveLevel(prevLevel => prevLevel + 1);
    }
    
    setActiveSlideIndex(0);
    setHidden(false)
  };

  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            Home Page
          </Typography>
         
        </Toolbar>
        
      </AppBar>
      <br/>
     {!hidden ? (
      <div>
        <div className="button">
     
     {Array.from({ length: slides.length
      }, (_, i) => i + 1).map(level => (
       <Button
         key={level}
         onClick={() => handleClick(level)}
         disabled={level !== activeLevel && !finishedLevels.includes(level)}
       >
         Slide {level}
       </Button>
     ))}
     </div>
     <div className="content">
        <p>No content Selected</p>
        </div>
      </div>
      
     ):(
      <div  className="slide">
        <div className='menucontent'>
          <Menucontent/>
          </div>
          <div>
          <h2 Index={index}>activeSlide {index}</h2>
          <p>{slides[index - 1].content}</p>
          
          </div>
          
       {index === 1 ? (
        <Button onClick={handleNext}>Next</Button>
      ): index === slides.length ? (
        <div>
           <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleFinish}>Finish</Button>
          
        </div>
      ):(
        <div>
         <Button onClick={handleNext}>Next</Button>
      <Button onClick={handleBack}>Back</Button>
        </div>
      )}
      
      
      </div>
     )}
     
    </div>
  );
};

export default HomePage;
