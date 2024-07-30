import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProductImage = styled.img`
  max-width: 20%;
  border-radius: 10px;
`;

const ProductTitle = styled.h2`
  margin: 1rem 0;
`;

const ProductDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const productVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

const ProductDetails = () => {
  return (
    <ProductContainer initial="hidden" animate="visible" variants={productVariants}>
      <ProductImage src="https://img.dominos.vn/cach-lam-pizza-chay-0.jpg" alt="Dubai's Pizza" />
      <ProductTitle>Dubai's Pizza</ProductTitle>
      <ProductDescription>
        Experience the rich, fabulous taste of Dubai's Pizza. Sourced from the finest vegetables and roasted to materials.
      </ProductDescription>
      <ProductPrice>$29.00</ProductPrice>
    </ProductContainer>
  );
}

export default ProductDetails;
