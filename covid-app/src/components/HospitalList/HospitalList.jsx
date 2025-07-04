import { useEffect, useState } from "react";
import styled from "styled-components";
import API from "../../utils/API";

const Container = styled.div`
  padding: 2rem;
  background-color: #f7fafa;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #06d6a0;
  font-family: "Poppins", sans-serif;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Table = styled.table`
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  font-family: "Poppins", sans-serif;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 12px;
  background-color: #06d6a0;
  color: white;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 12px;
  font-size: 0.9rem;
`;

//UNTUK MENJALANKAN COMPONENT INI DIHARAPKAN UNTUK MENJALANKAN PERINTAH
//node server.cjs untuk mengaktifkan proxy agar API dapat dimunculkan

function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const data = await API.getHospitals();
        setHospitals(data);
      } catch (error) {
        console.error("Gagal fetch data rumah sakit:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (loading)
    return (
      <Container>
        <p>Memuat data rumah sakit...</p>
      </Container>
    );

  return (
    <Container>
      <Title>Daftar Rumah Sakit Rujukan</Title>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Nama RS</Th>
              <Th>Alamat</Th>
              <Th>Kota/Region</Th>
              <Th>Provinsi</Th>
              <Th>Telepon</Th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((rs, index) => (
              <tr key={index}>
                <Td>{rs.name}</Td>
                <Td>{rs.address}</Td>
                <Td>{rs.region}</Td>
                <Td>{rs.province}</Td>
                <Td>{rs.phone || "-"}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}

export default HospitalList;
