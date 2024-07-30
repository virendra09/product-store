import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ReviewsContainer = styled(motion.section)`
  background: #f0f0f0;
  padding: 2rem;
  text-align: center;
`;

const Review = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewText = styled.p`
  font-size: 1rem;
`;

const Reviewer = styled.p`
  font-weight: bold;
  margin-top: 0.5rem;
`;

const reviews = [
  { id: 1, text: "Absolutely love this Pizza! The taste is unmatched.", reviewer: "Mack Doe" },
  { id: 2, text: "A perfect start to my day, every day.", reviewer: "Bob Smith" },
  { id: 3, text: "Rich and ymmy taste, highly recommend.", reviewer: "Carol White" },
];

const reviewsContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const reviewVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProductReviews = () => {
  return (
    <ReviewsContainer initial="hidden" animate="visible" variants={reviewsContainerVariants}>
      <h2>Product Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} variants={reviewVariants} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <ReviewText>"{review.text}"</ReviewText>
          <Reviewer>- {review.reviewer}</Reviewer>
        </Review>
      ))}
    </ReviewsContainer>
  );
}

export default ProductReviews;
