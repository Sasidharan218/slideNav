import './components.css'
import React, { useContext, useState } from 'react';
import { SlideContext } from './slidecontext';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Menucontent = () => {
  const { setHidden } = useContext(SlideContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleclose = () => {
    setAnchorEl(null);
  };

  const handleExit = () => {
    setHidden(false)
   
  };

  return (
    <div>
    <IconButton
      aria-label="more"
      aria-controls="long-menu"
      aria-haspopup="true"
      onClick={handleClick}
     
    >
      <FontAwesomeIcon icon={faBars} />
    </IconButton>
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
       >
      
        <MenuItem>
          <Button onClick={handleclose}>Close</Button>
          <br/><br/>
          <Button onClick={handleExit}>Exit</Button>
        </MenuItem>
      
    </Menu>
  </div>

  );
};

export default Menucontent;
