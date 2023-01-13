import React from 'react';
import people from '../../assets/people.png';
import cli from '../../assets/cli.png';
import CLInew from '../../assets/CLInew.PNG';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1>TourneAIO</h1>
      <p>EU focused CLI bot which currently only supports Windows.</p>

      <div className="gpt3__header-content__input">
        <a href="https://tourneaio.hyper.co/waitlist" type="button">
          <button>Join Waiting List!</button>
        </a>
      </div>

      <div className="gpt3__header-content__input2">
        <a type="button">
          <button>Sold Out!</button>
        </a>
      </div>

      <div className="gpt3__header-content__people">
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={CLInew}/>
    </div>
  </div>
);

export default Header;
