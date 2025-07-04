import styled from "styled-components";
import image from "../../assets/image/image1.png";
import { Link } from "react-router-dom"; // <- Tambahkan ini

const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  color: #fff;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: white;
  max-width: 100%;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const Left = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

const Right = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

const Title = styled.h1`
  color: #06d6a0;
  margin-bottom: 1rem;
  font-size: 2.44rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

const Information = styled.h3`
  color: #118ab2;
  margin-bottom: 1rem;
  font-size: 1.59rem;
  font-family: "Poppins", sans-serif;
`;

const Description = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
  text-align: justify;
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  max-width: 500px;
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #06d6a0;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #05c299;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  display: flex;
`;

function About() {
  return (
    <Container>
      <AboutSection>
        <Left>
          <Title>Covid Global</Title>
          <Information>Pemantauan Perkembangan Covid-19 Dunia</Information>
          <Description>
            Website Covid Global merupakan platform pemantauan yang menyajikan
            data terkini seputar perkembangan pandemi Covid-19 secara global.
            Situs ini menyediakan informasi real-time mengenai jumlah kasus,
            tingkat kesembuhan, pasien aktif, serta korban meninggal dari
            berbagai negara di dunia. Dengan mengakses data dari sumber-sumber
            terpercaya, Covid Global bertujuan membantu masyarakat, peneliti,
            dan pembuat kebijakan dalam memahami tren penyebaran dan dampak
            virus ini secara akurat. Selain itu, website ini juga menyediakan
            fitur untuk menambahkan data manual guna kebutuhan pembelajaran dan
            simulasi.
          </Description>
          <ButtonLink to="/global">Lihat Data Global</ButtonLink>
        </Left>
        <Right>
          <Image src={image} alt="Medical workers with medicine" />
        </Right>
      </AboutSection>
    </Container>
  );
}

export default About;
