import { Container, Grid, styled, Typography } from "@mui/material";
import ProjetoBB from "../../../../assets/images/projetoBB.jpg";
import theme from "../../../../theme";

const StyledHero = styled("div")({
  backgroundColor: theme.palette.secondary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 0",

  "@media (max-width: 600px)": {
    height: "auto",
    minHeight: "100vh",
    padding: "60px 20px",
  },
});

const StyledProjectImg = styled("img")({
  display: "block",
  margin: "0 auto",
  width: "100%",
  maxWidth: "720px",
  height: "auto",
  borderRadius: "12px",
  zIndex: 9999,
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    transform: "scale(1.03)", // efeito leve de destaque
  },
});

const Projects = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid size={{xs:12, md:8}}>
            <Typography
              textAlign="center"
              color="primary"
              variant="h4"
              fontSize={{ xs: "3rem", md: "4.25rem" }}
              fontWeight={600}
              gutterBottom
            >
              Projetos
            </Typography>

            <Grid container spacing={2} justifyContent="center">
              {/* Aqui você pode adicionar cards ou outros projetos */}
            </Grid>
          </Grid>

          <Grid size={{xs:12, md:6}} textAlign="center">
            <a href="https://github.com/MglBonil/BraiamBank">
                <StyledProjectImg src={ProjetoBB} alt="Projeto Braiam Bank" />
            </a>
            
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Projects;
