import React, { useState } from "react";
import styled from "styled-components";
import image from "../../assets/image/image2.png";

const Container = styled.div`
  display: flex;
  max-width: fit-content;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f7fafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const FormContainer = styled.div`
  flex: 1;
  padding-left: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #06d6a0;
  margin-bottom: 1.5rem;
  text-align: left;
  font-family: "Poppins", sans-serif;
`;

const StyledForm = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 1.2rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #64748b;
    font-family: "Poppins", sans-serif;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-bottom: 2px solid #06d6a0;
    font-size: 1rem;
    outline: none;
    background-color: transparent;
    font-family: "Poppins", sans-serif;
  }
`;

const SubmitButton = styled.button`
  background-color: #06d6a0;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #05c495;
  }
`;

const FormCovid = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    negara: "",
    status: "",
    jumlah: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allowedStatus = ["positif", "sembuh", "dirawat", "meninggal"];
    const statusLower = formData.status.toLowerCase();

    if (!allowedStatus.includes(statusLower)) {
      alert("Status harus: Positif, Sembuh, Dirawat, atau Meninggal");
      return;
    }

    if (!formData.negara || !formData.jumlah) {
      alert("Semua field wajib diisi");
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.warn("onSubmit function not provided to FormCovid");
    }

    // Reset form
    setFormData({ negara: "", status: "", jumlah: "" });
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={image} alt="Form Illustration" />
      </ImageContainer>
      <FormContainer>
        <Title>Form Tambah Data Global</Title>
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="negara">Negara</label>
            <input
              type="text"
              id="negara"
              name="negara"
              placeholder="Contoh: Indonesia"
              value={formData.negara}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              placeholder="Positif / Sembuh / Dirawat / Meninggal"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="jumlah">Jumlah</label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              placeholder="Contoh: 100"
              value={formData.jumlah}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
      </FormContainer>
    </Container>
  );
};

export default FormCovid;
