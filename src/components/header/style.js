import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #f8f9fa;
  padding: 10px 20px;
  display: flex;
  gap: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const NavLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;