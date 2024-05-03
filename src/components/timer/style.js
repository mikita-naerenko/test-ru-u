import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const TimeInput = styled.input`
  font-size: 18px;
  padding: 10px;
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #4A90E2;
  }
`;

export const TimeDisplay = styled.div`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  background-color: #f3f3f3;
`;

export const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;