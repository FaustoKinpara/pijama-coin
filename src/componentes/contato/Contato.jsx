import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './Contato.css'

const Contato = () => {
  return (
    <Container className="caixa">
      <h2>Contato</h2>
      <Box>
        <p>Para maiores informações</p>
        <p>Sem compromisso</p>
        <p>TEL.: (11) 91234 - 1234</p>
        <p>WHATSAPP: (11) 91234 - 1234</p>
        <p>E-MAIL: pijama@gmail.com</p>
      </Box>
    </Container>
  );
};

export default Contato;
