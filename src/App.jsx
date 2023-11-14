import { useState } from 'react';
import reviews from './data';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import { ImQuotesRight } from 'react-icons/im';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const prevPerson = () => {
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
    setIndex((index - 1 + reviews.length) % reviews.length);
  };
  const nextPerson = () => {
    setIndex(index === reviews.length - 1 ? 0 : index + 1);
    setIndex((index + 1) % reviews.length);
  };
  const randomPerson = () => {
    let num = Math.floor(Math.random() * reviews.length);
    while (num === index) {
      num = Math.floor(Math.random() * reviews.length);
    }
    setIndex(num);
  };
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <ImQuotesRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          Surprise me!
        </button>
      </article>
    </main>
  );
};
export default App;
