
import styled from "@emotion/styled";

import Hero from "./pages/Home/sections/Hero/Hero";
import { Chip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Twitter } from "@mui/icons-material";
import Contact from "./pages/Home/sections/Contact/Contact";
import About from "./pages/Home/sections/About/About";
import Projects from "./pages/Home/sections/Projects/Projects";




const App = () => {

  const StyledHeroNav = styled("nav")({
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "16px",
    padding: "10px 24px",
    background: "rgba(30, 30, 30, 0.6)",
    borderRadius: "9999px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255,255,255,0.1)",
    zIndex: 9999,
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      background: "rgba(30, 30, 30, 0.8)",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
    }
  });

  const StyledMediaBar = styled("nav")({
    position: "fixed",
    top: "50%",
    left: "1%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "10px",
    zIndex: 9999,
    transition: "all 0.3s ease-in-out",

    // MOBILE (máx 600px)
    "@media (max-width: 1150px)": {
      flexDirection: "row",
      top: "auto",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.45)",
      padding: "12px 20px",
      borderRadius: "9999px",
      backdropFilter: "blur(10px)",
    },
  });




  return (
    <>

      <StyledHeroNav>
        <Chip
          label="Inicio"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 600,
            transition: "all .25s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-2px)",
            },
          }}
        />
        <Chip
          label="Sobre"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 600,
            transition: "all .25s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-2px)",
            },
          }}
        />

        <Chip
          label="Projetos"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 600,
            transition: "all .25s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-2px)",
            },
          }}
        />

        <Chip
          label="Contato"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 600,
            transition: "all .25s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-2px)",
            },
          }}
        />

      </StyledHeroNav>

      <StyledMediaBar>
        <a href="https://github.com/MglBonil">
          <GitHubIcon
            sx={{
              color: "white",
              cursor: "pointer",
              fontSize: { xs: 26, sm: 30, md: 34 },
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.2)" },
            }}
          />
        </a>

        <a href="https://www.linkedin.com/in/miguel-bonilha-cassiano-598866279/">
          <LinkedInIcon sx={{
            color: "white",
            cursor: "pointer",
            fontSize: { xs: 26, sm: 30, md: 34 },
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.2)" },
          }} />
        </a>

        <a href="https://x.com/MglBonilha">
          <Twitter sx={{
            color: "white",
            cursor: "pointer",
            fontSize: { xs: 26, sm: 30, md: 34 },
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.2)" },
          }} />
        </a>
        <a href="mailto:miguelbcassiano@gmail.com">
          <EmailIcon sx={{
            color: "white",
            cursor: "pointer",
            fontSize: { xs: 26, sm: 30, md: 34 },
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.2)" },
          }} />
        </a>

      </StyledMediaBar>
      <Hero />
      <Projects/>
      <About/>
      <Contact/>

    </>
  )
}

export default App
