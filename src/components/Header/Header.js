import { ReactComponent as Logo } from "../../images/Logo.svg";
import Container from "../Container/Container";
import "../../styles/Header/Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-wrapper">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="button-container">
            <Button type="button">Users</Button>
            <Button type="button">Sign up</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
