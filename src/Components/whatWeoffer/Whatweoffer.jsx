import React from "react";
import "./whatweoffer.css";
function Whatweoffer() {
  return (
    <div className="Ncode__card-container">
      <div className="Ncode__card-conatainer-row">
        <div className="item">
        <div className="card">
          <img
            className="card__img"
            src="https://www.shutterstock.com/image-illustration/we-offer-solutions-260nw-403321630.jpg"
            alt="Snowy Mountains"
          />
          <div className="card__content">
            <h1 className="card__header">What we offer? </h1>
            <p className="card__text">
              Work with diverse and driven people on global projects that are
              truly shaping the world. Seize the opportunity to{" "}
              learn, grow, and realize your ambitions.
            </p>
            <button className="card__btn">
              Explore <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="card">
          <img
            className="card__img"
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDEzNDF8MHwxfHNlYXJjaHw0fHxBSXxlbnwxfHx8fDE3MDgyNjY2NzB8MA&ixlib=rb-4.0.3&q=85&w=608&dpr=2"
            alt="Desert"
          />
          <div className="card__content">
            <h1 className="card__header">How we do it?.</h1>
            <p className="card__text">
            Accelerate your growth through AI-Enabled Tech and development opportunities. Get the autonomy to act with confidence and create the future. Are you ready to never stand still?
            </p>
            <button className="card__btn">
              Explore <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      </div>
      <div className="Ncode__card-conatainer-row">
      <div className="item">
        <div className="card">
          <img
            className="card__img"
            src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDEzNDF8MHwxfHNlYXJjaHwxNXx8QUl8ZW58MXx8fHwxNzA4MjY2Njg0fDA&ixlib=rb-4.0.3&q=85&w=608&dpr=2"
            alt="Canyons"
          />
          <div className="card__content">
            <h1 className="card__header">We transforms your businesses through technology</h1>
            <p className="card__text">
            We provide assistance to navigate digital transformation and drive real growth, drawing combined power of experience and contextual knowledge, across a vast ecosystem of expertise.
            </p>
            <button className="card__btn">
              Explore <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="card">
          <img
            className="card__img"
            src="https://images.unsplash.com/photo-1680783954745-3249be59e527?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDEzNDF8MHwxfHNlYXJjaHwxOXx8QUl8ZW58MXx8fHwxNzA4MjY2Njg0fDA&ixlib=rb-4.0.3&q=85&w=608&dpr=2"
            alt="Canyons"
          />
          <div className="card__content">
            <h1 className="card__header">Investors.</h1>
            <p className="card__text">
            Maximizing shareholder value with good corporate governance.
            </p>
            <button className="card__btn">
              Explore <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Whatweoffer;
