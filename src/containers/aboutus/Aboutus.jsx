import React, { useEffect, useState, useRef } from 'react';
import Feature from '../../components/feature/Feature';
import './aboutus.css';

const WhatGPT3 = () => {
  const myRef = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (myRef.current) {
        const { top } = myRef.current.getBoundingClientRect();
        if (top < window.innerHeight) {
          setStyle({
            visibility: 'visible',
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'visibility 0s, opacity 0.5s, transform 0.5s'
          });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <div className="gpt3__whatgpt3 section__margin" id="aboutus" ref={myRef}>
    <div className="gpt3__whatgpt3-feature">
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1>About Us</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="All in one (AIO)" text="We aim to provide are users with a forever expanding sitelist for EU specific regions, whils't aiming for quality." />
      <Feature title="Task Creation" text="Are goal is to provide a smooth user experience and interface with our powerful task enging that provides no limit's to the number of tasks a user is able to run!" />
      <Feature title="Stability" text="Theres more then just meets the eye with Tourne, with the powerful task engine that provides amazing performance to ensure the bot runs as smooth as possible, with code designed to make our sites as reliable as possible" />
    </div>
  </div>
  )
};

export default WhatGPT3;
