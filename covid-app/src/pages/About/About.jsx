import { useState } from "react";
import styled from "styled-components";
import About from "../../components/About/About";

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
  resize: none;
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

const CardTitle = styled.h3`
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
`;

const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #118ab2;
  font-family: "Poppins", sans-serif;
`;

const Description = styled.p`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #64748b;
  margin-top: 1rem;
`;

const CommentDisplay = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;


function AboutPage() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, comment });
    setName("");
    setComment("");
  };

  return (
    <Container>
      <Title>Tentang Sistem Informasi Covid-19</Title>
      <About />

      <FormSection>
        <Title>Berikan Pendapatmu</Title>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nama</Label>
            <Input
              type="text"
              placeholder="Masukkan nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Komentar</Label>
            <Input
              as="textarea"
              rows="4"
              placeholder="Pendapatmu tentang Covid-19"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit">Kirim</Button>
        </FormContainer>
      </FormSection>

      {submittedData && (
        <CommentDisplay>
          <CardTitle>Komentar Terbaru</CardTitle>
          <CardValue>{submittedData.name}</CardValue>
          <Description>{submittedData.comment}</Description>
        </CommentDisplay>
      )}
    </Container>
  );
}

export default AboutPage;

