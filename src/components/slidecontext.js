
import React, { createContext, useState, useEffect } from 'react';

const SlideContext = createContext({
  activeLevel: 1 ,
  setActiveLevel: () => {},
  activeSlideIndex: 0,
  setActiveSlideIndex: () => {},
  finishedLevels:[],
  setFinishedLevels: () => {},
  slide: null,
  setSlide: () => {},
  index: '' ,
  setIndex: () => {},
  hidden: false,
  setHidden: () => {},
});

const SlideProvider = ({ children }) => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [finishedLevels, setFinishedLevels] = useState([]);
  const [slide,setSlide] = useState(null)
  const [index,setIndex] = useState('')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    
    const storedData = localStorage.getItem('slideNavigationState');
    if (storedData) {
      const { activeLevel: storedActiveLevel, activeSlideIndex: storedActiveSlideIndex, finishedLevels: storedFinishedLevels } = JSON.parse(storedData);
      setActiveLevel(storedActiveLevel);
      setActiveSlideIndex(storedActiveSlideIndex);
      setFinishedLevels(storedFinishedLevels);
    }
  }, []);

  useEffect(() => {
    
    const dataToStore = JSON.stringify({ activeLevel, activeSlideIndex, finishedLevels });
    localStorage.setItem('slideNavigationState', dataToStore);
  }, [activeLevel, activeSlideIndex, finishedLevels]);

  return (
    <SlideContext.Provider
      value={{
        activeLevel,
        setActiveLevel,
        activeSlideIndex,
        setActiveSlideIndex,
        finishedLevels,
        setFinishedLevels,
        slide,
        setSlide,
        index,
        setIndex,
        hidden,
  setHidden,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export { SlideContext, SlideProvider };
