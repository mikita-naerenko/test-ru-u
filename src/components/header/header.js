import  {StyledHeader,  NavLink} from './style'

const Header = () => {
    return (
        <StyledHeader>
          <NavLink to="/">Таймер</NavLink>
          <NavLink to="/palette">Палитра</NavLink>
        </StyledHeader>
    );
  };
  
  export default Header;