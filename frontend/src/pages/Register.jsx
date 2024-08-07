import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 8rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Add your registration logic here

  return (
    <Container>
      <Title>Register</Title>
      <Form>
        <Label>Name:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label>Email:</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Password:</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Label>Confirm Password:</Label>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;