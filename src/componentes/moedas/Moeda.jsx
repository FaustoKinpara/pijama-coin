import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";

import "./Moeda.css";
import coin from "./card/coin.png";
import coin1 from "./card/coin1.png";

const Moeda = () => {
  return (
    <Container>
      <h2 className="titulo">Moedas</h2>
      <Box sx={{ display: "grid", rowGap: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 25 cents Ano: 1967
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin1}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 1 real Ano: 2001
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 25 cents Ano: 1967
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin1}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 1 real Ano: 2001
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 25 cents Ano: 1967
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin1}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 1 real Ano: 2001
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 25 cents Ano: 1967
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin1}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 1 real Ano: 2001
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 25 cents Ano: 1967
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin1}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 1 real Ano: 2001
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 25 cents Ano: 1967
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, padding: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={coin1}
                alt="moeda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moeda: 1 real Ano: 2001
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ponto de interesse: Aqui você pode colocar qualquer informação
                  relevante de maneira sucinta e objetiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Moeda;
