import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled(motion.section)`
  background: #f9f9f9;
  padding: 2rem;
  text-align: center;
`;

const Testimonial = styled.blockquote`
  font-style: italic;
  margin: 1rem 0;
`;

const testimonialsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
};

const Testimonials = () => {
  return (
    <TestimonialsContainer initial="hidden" animate="visible" variants={testimonialsVariants}>
      <h2>Customer Testimonials</h2>
      <Testimonial>"The best pizza I've ever had!" - Jane Doe</Testimonial>
      <Testimonial>"A morning must-have!" - John Smith</Testimonial>
    </TestimonialsContainer>
  );
}

export default Testimonials;
