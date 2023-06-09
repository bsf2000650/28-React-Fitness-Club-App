import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter';
import { motion } from "framer-motion";

const Hero = () => {

    const transition = {type : 'spring', duration : 3};
    const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <>
      <div className="hero" id="home">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />
          {/* the best add */}
          <div className="the-best-ad">
            <motion.div 
            
            initial={{left : mobile ? '178px' : '238px'}}
            whileInView={{left : '8px'}}
            transition={{...transition, type: 'tween'}}

            ></motion.div>
            <span>The Best Fitness Club in the Town</span>
          </div>
          {/* Hero Heading */}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, ipsam?
              </span>
            </div>
          </div>

          {/* Figures */}

          <div className="figures">
            <div>
              <span>
                <NumberCounter end={150} start={100} delay='4' preFix='+' />
              </span>
              <span>expert coaches</span>
            </div>
            <div>
              <span><NumberCounter end={978} start={800} delay='4' preFix='+' /></span>
              <span>members joined</span>
            </div>
            <div>
              <span><NumberCounter end={50} start={0} delay='4' preFix='+' /></span>
              <span>fitness progress</span>
            </div>
          </div>

          {/* Hero Buttons */}

          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div className="heart-rate"
          
            initial={{right: '-1rm'}}
            whileInView={{right : '4rem'}}
            transition={transition}

          >
            <img src={Heart} alt="Heart Rate" />
            <span>Heart Rate </span>
            <span>116 bpm</span>
          </motion.div>

          <img src={hero_image} alt="hero" className="hero-image" />
          <motion.img

        initial={{right: '11rem'}}
        whileInView={{right : '20rem'}}
        transition={transition}

            src={hero_image_back}
            alt="hero back"
            className="hero-image-back"
          />

          <motion.div 
          initial={{right : '37rem'}}
          whileInView={{right:'28rem'}}
          transition={transition}

          className="calories">
            <img src={Calories} alt="Calories" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
