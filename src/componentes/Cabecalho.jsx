import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import './Cabecalho.css';

const Cabecalho = () => {

  return (
    <AppBar position="static" sx={{ bgcolor: "#1B6627" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO_PIJAMA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/moeda">MOEDA</Link>
            <Link className="link" to="/contato">CONTATO</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Cabecalho;
