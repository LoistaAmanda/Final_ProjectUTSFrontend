import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const Container = styled.div`
  padding: 2rem;
  background-color: #f7fafa;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #06d6a0;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #118ab2;
`;

const FormSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background-color: #06d6a0;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
  margin-right: 1rem;

  &:hover {
    background-color: #05c495;
  }
`;

const RujukButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background-color: #118ab2;
  color: white;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0e799f;
  }
`;

const Description = styled.p`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #64748b;
  margin-bottom: 2rem;
`;

function LayananCOVID19() {
  const [indonesia, setIndonesia] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    provinsi: "",
    gejala: "",
  });

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => setIndonesia(res.data))
      .catch((err) => console.error("Gagal mengambil data nasional", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Laporan gejala COVID-19 berhasil dikirim. Silakan rujuk ke rumah sakit terdekat jika perlu."
    );
    setFormData({ nama: "", provinsi: "", gejala: "" });
  };

  return (
    <Container>
      <Title>Layanan COVID-19</Title>

      <Description>
        Jika Anda merasa mengalami gejala COVID-19, silakan isi formulir di
        bawah ini dan rujuk ke rumah sakit terdekat.
      </Description>

      <Title>Laporan Gejala COVID-19</Title>
      <FormSection>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nama">Nama</Label>
            <Input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="provinsi">Provinsi</Label>
            <Input
              type="text"
              id="provinsi"
              name="provinsi"
              value={formData.provinsi}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="gejala">Gejala</Label>
            <Input
              type="text"
              id="gejala"
              name="gejala"
              value={formData.gejala}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Kirim Laporan</Button>
        </FormContainer>
        <RujukButton to="/RumahSakit">Lihat Rumah Sakit Rujukan</RujukButton>
      </FormSection>
    </Container>
  );
}

export default LayananCOVID19;
