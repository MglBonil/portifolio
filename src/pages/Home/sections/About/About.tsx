import { Chip, Container, Grid, Stack, Typography, Tabs, Tab, Box } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../../../theme';
import { useState } from 'react';

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

const StyledTabs = styled(Tabs)({
    marginTop: "40px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    
    "& .MuiTabs-indicator": {
        backgroundColor: "rgba(0,124,240,0.8)",
    },
});

const StyledTab = styled(Tab)({
    color: "rgba(255,255,255,0.7)",
    fontWeight: 600,
    fontSize: "1rem",
    textTransform: "none",
    
    "&.Mui-selected": {
        color: "white",
    },
    
    "@media (max-width: 600px)": {
        fontSize: "0.875rem",
        padding: "12px 8px",
    },
});

const StyledTabPanel = styled(Box)({
    padding: "30px 0",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    
    "@media (max-width: 600px)": {
        padding: "20px 0",
        gap: "15px",
    },
});

const StyledIconContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    background: "rgba(30, 30, 30, 0.4)",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s ease",
    minWidth: "100px",
    minHeight: "100px",
    
    "&:hover": {
        background: "rgba(30, 30, 30, 0.6)",
        transform: "translateY(-5px)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    },
    
    "@media (max-width: 600px)": {
        minWidth: "80px",
        minHeight: "80px",
        padding: "15px",
    },
});



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tech-tabpanel-${index}`}
            aria-labelledby={`tech-tab-${index}`}
            {...other}
        >
            {value === index && <StyledTabPanel>{children}</StyledTabPanel>}
        </div>
    );
}

export default function AlternateTimeline() {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }} justifyContent="center">
                        <Stack direction="row" spacing={1} justifyContent="center">
                            <Chip
                                label="Sobre mim"
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.15)",
                                    color: "white",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    fontWeight: 600,
                                    transition: "all .25s ease",
                                    transform: "translateY(-2px)"

                                }}
                            />


                        </Stack>
                        <Typography
                            justifyContent="center"
                            textAlign={"center"}
                            color="primary"
                            variant="h4"
                            fontSize={{ xs: "1.5rem", md: "2.125rem" }}
                            fontWeight="600"><br />Me Conheça Melhor</Typography>
                        <Typography
                            justifyContent="center"
                            textAlign={"center"}
                            color="primary"
                        >Sou desenvolvedor backend junior, em constante jornada de aprendizado de novas tecnologias e formas de se resolver problemas. Busco soluções praticas e eficientes para resolver problemas de forma otimizada e criativa.</Typography>
                        <Typography
                            justifyContent="center"
                            textAlign={"center"}
                            color="primary"
                            variant="h4"
                            fontSize={{ xs: "1.5rem", md: "2.125rem" }}
                            fontWeight="600"><br />Minha história</Typography>
                        <Typography
                            justifyContent="center"
                            textAlign={{ xs: "center", md: "left" }}
                            color="primary"
                            fontSize={{ xs: "0.9rem", md: "1rem" }}
                        >
                            Atuo com desenvolvimento de aplicativos desktop, com foco em projetos que visam criar soluções que facilitem a usabilidade e contribuam para a comunidade de desenvolvimento.
                            <br /><br />
                            Meu primeiro contato com a programação foi em 2018, quando iniciei um curso na rede "SuperGeeks", onde desenvolvi os pilares do pensamento lógico. Desde então, nunca deixei de estudar, construindo uma base sólida em matemática e realizando diversos cursos complementares. Entre eles, destacam-se: cursos de Python (90 horas) no SENAI em 2023, cursos de Spring Boot na plataforma Udemy em 2025 e, atualmente, o curso de Desenvolvimento de Sistemas na ETEC, iniciado em 2025.
                            <br /><br />
                            Sou autodidata e aprendi diversas tecnologias e conceitos também por meio de fóruns, documentação e materiais online. Além disso, realizo leituras de livros como "Introdução ao Python" e "Orientação a Objetos com Java".
                            <br /><br />
                            Gosto de trabalhar em equipe e me considero uma boa figura para liderança, coordenação e atuação proativa em projetos.
                            <br /><br />
                            Atualmente, estou no 3º ano do curso de Desenvolvimento de Sistemas e mantenho uma jornada de aprendizado constante.
                        </Typography>

                        <Box sx={{ width: "100%", marginTop: "40px" }}>
                            <StyledTabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="tecnologias tabs"
                            >
                                <StyledTab label="Back-end" />
                                <StyledTab label="Front-End" />
                                <StyledTab label="Ferramentas" />
                            </StyledTabs>

                            <TabPanel value={value} index={0}>
                                {/* Adicione aqui os ícones das linguagens Back-end */}
                                <StyledIconContainer>
                                    <Typography color="primary" fontSize="0.875rem" textAlign="center">
                                        Adicione ícones aqui
                                    </Typography>
                                </StyledIconContainer>
                            </TabPanel>

                            <TabPanel value={value} index={1}>
                                {/* Adicione aqui os ícones das linguagens Front-End */}
                                <StyledIconContainer>
                                    <Typography color="primary" fontSize="0.875rem" textAlign="center">
                                        Adicione ícones aqui
                                    </Typography>
                                </StyledIconContainer>
                            </TabPanel>

                            <TabPanel value={value} index={2}>
                                {/* Adicione aqui os ícones das ferramentas */}
                                <StyledIconContainer>
                                    <Typography color="primary" fontSize="0.875rem" textAlign="center">
                                        Adicione ícones aqui
                                    </Typography>
                                </StyledIconContainer>
                            </TabPanel>
                        </Box>




                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}
