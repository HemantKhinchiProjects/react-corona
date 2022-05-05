import React, { useState, useEffect } from 'react';
import CardStyle from '../../ui/CardStyle';
import data from './data';
const PortfolioSlide = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="col-md-6 col-xl-4 grid-margin stretch-card">
      <CardStyle>
        <section className="section">
          <div className="title">
            <h2>
              <span>/</span>
              Review
            </h2>
          </div>
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person;
              let position = 'nextSlide';
              if (personIndex === index) {
                position = 'activeSlide';
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = 'lastSlide';
              }
              return (
                <article key={id} className={position}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  <svg
                    height="30"
                    viewBox="0 0 1792 1792"
                    width="30"
                    className="quote"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M832 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136zm896 0v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136z" />
                  </svg>
                </article>
              );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <svg
                width="15"
                height="15"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 298 511.93"
              >
                <path
                  fill-rule="nonzero"
                  d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"
                />
              </svg>
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <svg
                width="15"
                height="15"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 298 511.93"
              >
                <path
                  fill-rule="nonzero"
                  d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                />
              </svg>
            </button>
          </div>
        </section>
      </CardStyle>
    </div>
  );
};
export default PortfolioSlide;
