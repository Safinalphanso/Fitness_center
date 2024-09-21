import React from 'react';
import './Review.css';

// Ensure the correct path to the images
const reviews = [
  { name: 'John', img: '1', rating: 5, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
  { name: 'Steve', img: '2', rating: 4, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
  { name: 'David', img: '3', rating: 5, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' }
];

const Review = () => {
  return (
    <section id="review" className="review">
      <div className="review-box">
        <h2 className="heading" data-aos="zoom-in-down">Client Reviews</h2>
        <div className="wrapper" data-aos="zoom-in-up">
          {reviews.map((review, index) => (
            <div className="review-item" key={index}>
              {/* Ensure the path reflects the actual directory of images */}
              <img src={`../assets/${review.img}`} alt={review.name} />
              <h2>{review.name}</h2>
              <div className="rating">
                {Array(review.rating).fill().map((_, i) => (
                  <i className='bx bxs-star' id="star" key={i}></i>
                ))}
              </div>
              <p>{review.text}</p>
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};

export default Review;
