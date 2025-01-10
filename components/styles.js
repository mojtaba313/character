// components/styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #E0E0E0;
    font-family: Arial, sans-serif;
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 200px;
  background-color: #1E1E1E;
  border: 1px solid #444;
  color: #E0E0E0;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #0078D4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #005a9e;
  }
`;

export const Info = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;
