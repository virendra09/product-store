import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background: #148;
  color: orange;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Footer = () => {
  return (
    <FooterContainer initial="hidden" animate="visible" variants={footerVariants}>
      &copy; 2024 Dubai's Pizza. All Rights Reserved.
    </FooterContainer>
  );
}

export default Footer;
