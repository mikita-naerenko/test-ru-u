import styled from 'styled-components';

export const WrapperChromePicker = styled.div`
  position: fixed;
  right: 20px;
  top: 50px;
  z-index: 10;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex-grow: 1;
`;

export const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover > span {
    display: block;
  }
`;

export const RemoveButton = styled.span`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f00;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
`;

export const AddColorButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;