import styled from "styled-components";

// Styled Components
const Container = styled.div`
  background-color: #06d6a0;
  color: #fff;
  padding: 1rem;
  display: flex;
  text-align: justify;
`;

const FooterWrapper = styled.footer`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
`;

const Author = styled.p`
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
`;

function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <Title>Covid ID</Title>
        <Author>
          Developed by Loista Amanda Noviar <br />
          Projek UAS Pemrograman Frontend SE01
        </Author>
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
