import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background: #148;
  color: Yellow;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Header = () => {
  return (
    <HeaderContainer initial="hidden" animate="visible" variants={headerVariants}>
      Dubai's Pizza
    </HeaderContainer>
  );
}

export default Header;
