import React from 'react'
import iconAboutDark from '../assests/image-about-dark.jpg';
import iconAboutLight from '../assests/image-about-light.jpg';
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

    div1: {
        '@media (max-width: 780px)': {
            width: "330px !important",
            height: "20% !important"

        },
    },
    div2: {
        '@media (max-width: 780px)': {
            width: "256px !important",
            height: "40% !important",
            display:"flex",
            flexDirection:"column",
            paddingRight:69
        },
    },
    div3: {
        '@media (max-width: 780px)': {
            width: "330px !important",
            height: "30% !important"
        },
    },
    img1:{
        '@media (max-width: 780px)': {
            width: "80% !important",
        },
    }

}));



const BottomComponent = () => {

    const classes = useStyles();


    return (
        <>
            <div className={classes.div1} style={{ height: "100%", width: "33.33%" }}>
                <img className={classes.img1} src={iconAboutDark} alt="" />
            </div>
            <div className={classes.div2} style={{ height: "100%", width: "33.33%" }}>
                <h2>About our furniture </h2>
                <p>  Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <div className={classes.div3} style={{ height: "100%", width: "33.33%" }}>
                <img className={classes.img1} src={iconAboutLight} alt="" />
            </div>

        </>
    )
}

export default BottomComponent