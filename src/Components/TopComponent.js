import React, { useState } from 'react'
import DesktopImage1 from '../assests/desktop-image-hero-1.jpg';
import DesktopImage2 from '../assests/desktop-image-hero-2.jpg';
import DesktopImage3 from '../assests/desktop-image-hero-3.jpg';
import { LeftOutlined, RightOutlined, ArrowRightOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  '@media (min-width: 780px)': {
    alignItems: "normal"

  },

  button1: {
    '&:hover': {
      cursor: "pointer",
      backgroundColor: "gray !important"
    },
  },
  text1: {
    '&:hover': {
      cursor: "pointer",
      color: "gray !important"
    },
  },
  menuItems: {
    '&:hover': {
      cursor: "pointer",
      textDecoration: "underline"
    },
  },
  div1: {
    '@media (max-width: 780px)': {
      width: "330px !important",
      height: "330px !important"
    },
  },
  div1Div: {
    '@media (max-width: 780px)': {
      width: "311px !important",
    },
  },
  div2: {
    '@media (max-width: 780px)': {
      width: "330px !important",
      height: "330px !important"
    },
  },
  div2Div1: {
    '@media (max-width: 780px)': {
      height: "110% !important"
    },
  },
  div2Div2: {
    '@media (max-width: 780px)': {
      display: "none !important"
    },
  },
  leftAndRightButton: {
    '@media (max-width: 780px)': {
      display: "none !important"
    },
  },
  leftAndRightButtonMobile: {
    '@media (min-width: 780px)': {
      display: "none !important"
    },
  },
  menuBar:{
    '@media (max-width: 780px)': {
      display: "flex !important"
    },
  },
  animatedItem: {
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },



}));




const TopComponent = () => {

  const classes = useStyles();


  let imageArr = [DesktopImage1, DesktopImage2, DesktopImage3];

  const [currIndex, setCurrIndex] = useState(0);

  const [animatedDivClass, setAnimatedDivClass] = useState(false);
  const [animatedDivBlockDisplay, setAnimatedDivBlockDisplay] = useState("none");

  const handleMenuClick = () => {
    setAnimatedDivClass(true);
    setAnimatedDivBlockDisplay("flex");
  }
  const handleMenuClose = () => {
    setAnimatedDivClass(false);
    setAnimatedDivBlockDisplay("none");
  }



  return (
    <>
      <div className={classes.div1} style={{ height: "100%", width: "60%" }}>
        <img style={{ height: "100%", width: "100%" }} src={imageArr[currIndex]} alt="" />
        <div className={classes.div1Div} style={{ position: "absolute", display: "flex", flexDirection: "row", height: 30, width: 500, left: 0, top: 0, }}>
          <div className={classes.menuBar} style={{ width: 110, paddingLeft: 13,display:"none" }}><MenuOutlined onClick={handleMenuClick} style={{ color: "white" }} /></div>
          <div className={(animatedDivClass) ? classes.animatedItem : ""} style={{ display: animatedDivBlockDisplay, backgroundColor: "white", width: "106%", height: 50, position: "absolute", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
            <CloseOutlined onClick={handleMenuClose} />
            <p className={classes.menuItems} style={{ color: "black" }}>home</p>
            <p className={classes.menuItems} style={{ color: "black" }}>shop</p>
            <p className={classes.menuItems} style={{ color: "black" }}>about</p>
            <p className={classes.menuItems} style={{ color: "black" }}>contact</p>
          </div>

          <div style={{ width: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}><h3 style={{ color: "white" }}>room</h3></div>

          <div className={classes.div2Div2} style={{ display: "flex", width: "70%", justifyContent: "space-evenly", alignItems: "center" }}>
            <p className={classes.menuItems} style={{ color: "white" }}>home</p>
            <p className={classes.menuItems} style={{ color: "white" }}>shop</p>
            <p className={classes.menuItems} style={{ color: "white" }}>about</p>
            <p className={classes.menuItems} style={{ color: "white" }}>contact</p>
          </div>

        </div>
        <div className={classes.leftAndRightButtonMobile} style={{ display: "flex", flexDirection: "row", width: "90%",justifyContent:"flex-end",position:"absolute",top:281,left:-16 }}>
          <div className={classes.button1} onClick={() => { setCurrIndex((currIndex + 1) % 3) }} style={{ height: 40, width: 40, backgroundColor: 'black', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LeftOutlined style={{ color: "white", fontSize: 30 }} />
          </div>
          <div className={classes.button1} onClick={() => { setCurrIndex(Math.abs(currIndex + 1) % 3) }} style={{ height: 40, width: 40, backgroundColor: 'black', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <RightOutlined style={{ color: "white", fontSize: 30 }} />
          </div>
        </div>
      </div>
      <div className={classes.div2} style={{ height: "100%", width: "40%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div className={classes.div2Div1} style={{ height: "80%", width: "90%" }}>
          <h1>Discover innovative ways to decorate</h1>
          We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love
          <h2 className={classes.text1}>SHOP NOW <ArrowRightOutlined /></h2>
        </div>
        <div className={classes.leftAndRightButton} style={{ display: "flex", flexDirection: "row", width: "90%" }}>
          <div className={classes.button1} onClick={() => { setCurrIndex((currIndex + 1) % 3) }} style={{ height: 70, width: 70, backgroundColor: 'black', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LeftOutlined style={{ color: "white", fontSize: 30 }} />
          </div>
          <div className={classes.button1} onClick={() => { setCurrIndex(Math.abs(currIndex + 1) % 3) }} style={{ height: 70, width: 70, backgroundColor: 'black', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <RightOutlined style={{ color: "white", fontSize: 30 }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TopComponent