import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormContainer = styled(motion.section)`
  padding: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
  max-width: 300px;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #145;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #555;
  }
`;

const formVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const PurchaseForm = () => {
  return (
    <FormContainer initial="hidden" animate="visible" variants={formVariants}>
      <h2>Purchase Now</h2>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Address" />
        <Button type="submit">Buy Now, Come Again</Button>
      </Form>
    </FormContainer>
  );
}

export default PurchaseForm;
