import { Container, Grid, Typography, Tabs, Tab, Box } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../../../theme';
import { useState, useId } from 'react';

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

const StyledIcon = styled("img")({
    width: "50px",
    height: "50px",
    objectFit: "contain",

    "@media (max-width: 600px)": {
        width: "40px",
        height: "40px",
    },
});

interface TechIconProps {
    name: string;
    iconUrl: string;
}

const TechIcon = ({ name, iconUrl }: TechIconProps) => {
    return (
        <StyledIconContainer>
            <StyledIcon src={iconUrl} alt={name} />
            <Typography
                color="primary"
                fontSize={{ xs: "0.75rem", md: "0.875rem" }}
                textAlign="center"
                marginTop="8px"
                fontWeight={500}
            >
                {name}
            </Typography>
        </StyledIconContainer>
    );
};



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    tabId: string;
    tabpanelId: string;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, tabId, tabpanelId, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={tabpanelId}
            aria-labelledby={tabId}
            {...other}
        >
            {value === index && <StyledTabPanel>{children}</StyledTabPanel>}
        </div>
    );
}

export default function AlternateTimeline() {
    const [value, setValue] = useState(0);
    const tabsId = useId();
    const tab0Id = `${tabsId}-tab-0`;
    const tab1Id = `${tabsId}-tab-1`;
    const tab2Id = `${tabsId}-tab-2`;
    const tabpanel0Id = `${tabsId}-tabpanel-0`;
    const tabpanel1Id = `${tabsId}-tabpanel-1`;
    const tabpanel2Id = `${tabsId}-tabpanel-2`;

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }} justifyContent="center">
                        <Typography
                            justifyContent="center"
                            textAlign={"center"}
                            color="primary"
                            variant="h1"
                            fontSize={{ xs: "3rem", md: "4.25rem" }}
                            fontWeight="600"><br />Sobre Mim</Typography>
                        
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
                                id={tabsId}
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="tecnologias tabs"
                            >
                                <Tab
                                    id={tab0Id}
                                    aria-controls={tabpanel0Id}
                                    label="Back-end"
                                    sx={{
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
                                    }}
                                />
                                <Tab
                                    id={tab1Id}
                                    aria-controls={tabpanel1Id}
                                    label="Front-End"
                                    sx={{
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
                                    }}
                                />
                                <Tab
                                    id={tab2Id}
                                    aria-controls={tabpanel2Id}
                                    label="Ferramentas"
                                    sx={{
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
                                    }}
                                />
                            </StyledTabs>

                            <TabPanel value={value} index={0} tabId={tab0Id} tabpanelId={tabpanel0Id}>
                                {/* Back-end Technologies */}
                                <TechIcon name="C" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                                <TechIcon name="C++" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                                <TechIcon name="Java" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                                <TechIcon name="Spring" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                                <TechIcon name="C#" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                                <TechIcon name="Python" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                                <TechIcon name="Django" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                                <TechIcon name=".NET" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
                                <TechIcon name="Node.js" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                                <TechIcon name="PHP" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                            </TabPanel>

                            <TabPanel value={value} index={1} tabId={tab1Id} tabpanelId={tabpanel1Id}>
                                {/* Front-End Technologies */}
                                <TechIcon name="HTML" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                <TechIcon name="React" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                <TechIcon name="Vite" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" />
                                <TechIcon name="CSS" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                <TechIcon name="JavaScript" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </TabPanel>

                            <TabPanel value={value} index={2} tabId={tab2Id} tabpanelId={tabpanel2Id}>
                                {/* Tools */}
                                <TechIcon name="IntelliJ" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" />
                                <TechIcon name="VS Code" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                                <TechIcon name="Git" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                                <TechIcon name="GitHub" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                                <TechIcon name="Apache" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" />
                                <TechIcon name="NetBeans" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg" />
                                <TechIcon name="MySQL" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                                <TechIcon name="PostgreSQL" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                                <TechIcon name="XAMPP" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg" />
                            </TabPanel>
                        </Box>




                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}
