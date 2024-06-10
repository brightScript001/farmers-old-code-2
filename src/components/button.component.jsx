// src/components/Button/Buttons.js
import styled from "styled-components";

// Primary Button
export const PrimaryButton = styled.button`
  background-color: rgba(91, 170, 96, 1);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgba(91, 170, 96, 1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Secondary Button
export const SecondaryButton = styled.button`
  background-color: transparent;
  color: rgba(91, 170, 96, 1);
  border: 2px solid rgba(91, 170, 96, 1);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgba(91, 170, 96, 1);
    color: #fff;
  }

  &:disabled {
    background-color: #cccccc;
    border-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
