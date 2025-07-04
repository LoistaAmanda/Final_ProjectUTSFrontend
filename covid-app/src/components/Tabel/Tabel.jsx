import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  color: #06d6a0;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #555;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`;

const Th = styled.th`
  padding: 12px;
  background: #06d6a0;
  color: white;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  flex: 1 0 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #06d6a0;
  color: white;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #05c195;
  }
`;

const TabelGlobal = () => {
  const [dataGlobal, setDataGlobal] = useState([]);
  const [form, setForm] = useState({
    country: "",
    cases: "",
    recovered: "",
    active: "",
    deaths: "",
  });

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        const result = res.data.map((item) => ({
          country: item.country,
          cases: item.cases,
          recovered: item.recovered,
          active: item.active,
          deaths: item.deaths,
        }));
        setDataGlobal(result);
      })
      .catch((err) => {
        console.error("Gagal fetch data:", err);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      country: form.country,
      cases: parseInt(form.cases),
      recovered: parseInt(form.recovered),
      active: parseInt(form.active),
      deaths: parseInt(form.deaths),
    };
    setDataGlobal([...dataGlobal, newData]);
    setForm({ country: "", cases: "", recovered: "", active: "", deaths: "" });
  };

  return (
    <Container>
      <Title>Data COVID-19 Global</Title>
      <Subtitle>Tampil berdasarkan data API dan penambahan manual</Subtitle>

      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <Th>No</Th>
              <Th>Negara</Th>
              <Th>Kasus</Th>
              <Th>Sembuh</Th>
              <Th>Dirawat</Th>
              <Th>Meninggal</Th>
            </tr>
          </thead>
          <tbody>
            {dataGlobal.map((item, index) => (
              <tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item.country}</Td>
                <Td>{item.cases.toLocaleString()}</Td>
                <Td>{item.recovered.toLocaleString()}</Td>
                <Td>{item.active.toLocaleString()}</Td>
                <Td>{item.deaths.toLocaleString()}</Td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </Container>
  );
};

export default TabelGlobal;
