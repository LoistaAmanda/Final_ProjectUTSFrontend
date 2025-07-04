import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f7fafa;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #4a4a4a;
  font-family: "Poppins", sans-serif;
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
  color: #6a6a6a;
  font-family: "Poppins", sans-serif;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Status = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 28%;
  font-family: "Poppins", sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StatusTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  font-family: "Poppins", sans-serif;
`;

const Confirmed = styled.p`
  color: #06d6a0;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
`;

const Recovered = styled.p`
  color: #118ab2;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
`;

const Death = styled.p`
  color: #ef476f;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
`;

function CovidStatus() {
  const [data, setData] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndonesia = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://covid-193.p.rapidapi.com/statistics",
          params: { country: "Indonesia" },
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        const indonesia = response.data.response[0];

        setData({
          confirmed: indonesia.cases.total,
          recovered: indonesia.cases.recovered,
          deaths: indonesia.deaths.total,
        });

        setLoading(false);
      } catch (error) {
        console.error("Gagal fetch data Covid Indonesia:", error);
      }
    };

    fetchIndonesia();
  }, []);

  if (loading) return <p>Loading data...</p>;

  return (
    <Container>
      <Title>Indonesia</Title>
      <Subtitle>Data Covid yang telah di konfirmasi</Subtitle>
      <Card>
        <Status>
          <StatusTitle>Confirmed</StatusTitle>
          <Confirmed>{data.confirmed?.toLocaleString()}</Confirmed>
        </Status>
        <Status>
          <StatusTitle>Recovered</StatusTitle>
          <Recovered>{data.recovered?.toLocaleString()}</Recovered>
        </Status>
        <Status>
          <StatusTitle>Deaths</StatusTitle>
          <Death>{data.deaths?.toLocaleString()}</Death>
        </Status>
      </Card>
    </Container>
  );
}

export default CovidStatus;
