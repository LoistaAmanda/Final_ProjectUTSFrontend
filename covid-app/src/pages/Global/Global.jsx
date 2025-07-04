import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #6a6a6a;
  font-family: "Poppins", sans-serif;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
  text-align: justify;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Status = styled.div`
  background-color: #118ab2;
  padding: 1.5rem;
  border-radius: 8px;
  flex: 1;
  color: #fff;
`;

const StatusTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
`;

const Value = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const TableTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Poppins", sans-serif;
`;

const Thead = styled.thead`
  background-color: #06d6a0;
  color: white;
`;

const Th = styled.th`
  padding: 0.75rem;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: center;
`;

function Global() {
  const [data, setData] = useState({ cases: 0, recovered: 0, deaths: 0 });
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGlobalData() {
      try {
        const response = await fetch("https://disease.sh/v3/covid-19/all");
        const result = await response.json();

        setData({
          cases: result.cases,
          recovered: result.recovered,
          deaths: result.deaths,
        });
      } catch (error) {
        console.error("Gagal fetch data global:", error);
      }
    }

    async function fetchCountriesData() {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const result = await response.json();
        setCountries(result);
        setLoading(false);
      } catch (error) {
        console.error("Gagal fetch data negara:", error);
      }
    }

    fetchGlobalData();
    fetchCountriesData();
  }, []);

  return loading ? (
    <p>Loading global data...</p>
  ) : (
    <Container>
      <Title>Global</Title>
      <Subtitle>Data COVID-19 Seluruh Dunia</Subtitle>
      <Description>
        Halaman ini menyajikan informasi terkini mengenai kasus COVID-19 secara
        global. Data yang ditampilkan mencakup jumlah kasus terkonfirmasi,
        pasien yang sembuh, dan jumlah kematian di seluruh dunia. Di bawah ini
        juga tersedia tabel yang berisi detail data COVID-19 dari berbagai
        negara untuk memberikan gambaran yang lebih menyeluruh terhadap
        penyebaran virus secara internasional.
      </Description>

      <Card>
        <Status>
          <StatusTitle>Confirmed</StatusTitle>
          <Value>{data.cases.toLocaleString()}</Value>
        </Status>
        <Status>
          <StatusTitle>Recovered</StatusTitle>
          <Value>{data.recovered.toLocaleString()}</Value>
        </Status>
        <Status>
          <StatusTitle>Deaths</StatusTitle>
          <Value>{data.deaths.toLocaleString()}</Value>
        </Status>
      </Card>

      <TableContainer>
        <TableTitle>Data COVID-19 Berdasarkan Negara</TableTitle>
        <Table>
          <Thead>
            <tr>
              <Th>Negara</Th>
              <Th>Kasus</Th>
              <Th>Sembuh</Th>
              <Th>Meninggal</Th>
            </tr>
          </Thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.country}>
                <Td>{country.country}</Td>
                <Td>{country.cases.toLocaleString()}</Td>
                <Td>{country.recovered.toLocaleString()}</Td>
                <Td>{country.deaths.toLocaleString()}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Global;
