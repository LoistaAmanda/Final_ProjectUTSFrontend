import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Brand = styled.h1`
  font-size: 2.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #073b4c;
  }

  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #073b4c;
  }
`;

// Component
function Navbar() {
  return (
    <Container>
      <NavbarWrapper>
        <BrandLink to="/">
          <Brand>Sistem Informasi COVID-19</Brand>
        </BrandLink>
        <NavList>
          <NavItem>
            <NavLink to="/global">Global</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/LayananCOVID19">Layanan COVID-19</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/RumahSakit">Rumah Sakit</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </NavList>
      </NavbarWrapper>
    </Container>
  );
}

export default Navbar;
