
import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";

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
  const [activeSection, setActiveSection] = useState("inicio");
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const sections = [
        { id: "inicio", ref: heroRef },
        { id: "projetos", ref: projectsRef },
        { id: "sobre", ref: aboutRef },
        { id: "contato", ref: contactRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + rect.height;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionMap: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      inicio: heroRef,
      projetos: projectsRef,
      sobre: aboutRef,
      contato: contactRef,
    };

    const section = sectionMap[sectionId];
    if (section?.current) {
      const yOffset = -80; // Offset para a barra de navegação
      const y = section.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const StyledHeroNav = styled("nav")({
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "16px",
    padding: "10px 13px",
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
    },

    "@media (max-width: 600px)": {
      gap: "8px",
      padding: "8px 13px",
      top: "10px",
    },
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
          onClick={() => scrollToSection("inicio")}
          sx={{
            backgroundColor: activeSection === "inicio" ? "rgba(255,255,255,0.15)" : "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 600,
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            height: { xs: "28px", md: "32px" },
            cursor: "pointer",
            transition: "all .25s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-2px)",
            },
          }}
        />
        <Chip
          label="Projetos"
          onClick={() => scrollToSection("projetos")}
          sx={{
            backgroundColor: activeSection === "projetos" ? "rgba(255,255,255,0.15)" : "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 600,
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            height: { xs: "28px", md: "32px" },
            cursor: "pointer",
            transition: "all .25s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-2px)",
            },
          }}
        />
        <Chip
          label="Sobre"
          onClick={() => scrollToSection("sobre")}
          sx={{
            backgroundColor: activeSection === "sobre" ? "rgba(255,255,255,0.15)" : "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 600,
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            height: { xs: "28px", md: "32px" },
            cursor: "pointer",
            transition: "all .25s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-2px)",
            },
          }}
        />



        <Chip
          label="Contato"
          onClick={() => scrollToSection("contato")}
          sx={{
            backgroundColor: activeSection === "contato" ? "rgba(255,255,255,0.15)" : "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            fontWeight: 600,
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            height: { xs: "28px", md: "32px" },
            cursor: "pointer",
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
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

    </>
  )
}

export default App
