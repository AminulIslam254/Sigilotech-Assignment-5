import React, { useState } from 'react';
import BottomComponent from './BottomComponent';
import TopComponent from './TopComponent';


import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  '@media (max-width: 780px)': {
    alignItems: "normal"

  },

  mainDiv1: {
    '@media (max-width: 780px)': {
      height: "2000px !important"
    },
  },

  div1: {
    '@media (max-width: 780px)': {
      height: "900px !important"
    },
  },


  div2: {
    '@media (max-width: 780px)': {
      height: "900px !important",
      display: "flex",
      justifyContent: "center",
      width: "80%"
    },
  }




}));




const Home = () => {

  //redux part
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const classes = useStyles();





  return (
    <>
      <div className={classes.mainDiv1} style={{ height: 627, width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ height: "100%", width: "100%" }}>
          <div className={classes.div1} style={{ height: "70%", width: "100%", display: "flex", flexWrap: "wrap" }}>
            <TopComponent />
          </div>
          <div className={classes.div2} style={{ height: "30%", width: "100%", display: "flex", flexWrap: "wrap" }}>
            <BottomComponent />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home