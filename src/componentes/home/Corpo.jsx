import React from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import nota1 from "./imagem/nota1.png";
import nota2 from "./imagem/nota2.png";
import './Corpo.css';

const Corpo = () => {
  return (
    <Container className="corpo">
      <h1>Moedas Pijama</h1>
      <h2>Avaliação e Negociação de Moedas</h2>
      <Box className="corpo__caixa">
        <img src={nota1} alt="imagem de dinheiro antigo" className="corpo__caixa_imagem" />
        <p className="corpo__caixa_tipo">
          Aqui você pode fazer uma pequena apresentação.
          Recomendo que o texto seja curto e objetivo, que permita um rápido entendimento do site,
        </p>
        <img src={nota2} alt="imagem de dinheiro antigo" className="corpo__caixa_imagem" />
      </Box>
    </Container>
  );
};

export default Corpo;
