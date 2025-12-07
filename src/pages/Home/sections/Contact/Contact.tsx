import { Button, Container, Grid, Link, styled, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import theme from "../../../../theme";

const StyledContact = styled("div")({
    backgroundColor: theme.palette.secondary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 0",

    "@media (max-width: 600px)": {
        padding: "60px 20px",
    },
});

const StyledButton = styled(Button)({
    background: "rgba(30, 30, 30, 0.6)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "10px 24px",
    marginTop: "20px",
    fontWeight: 600,
    color: "white",

    "&:hover": {
        background: "rgba(30, 30, 30, 0.8)",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
    }
});



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!name.trim()) newErrors.name = "Nome é obrigatório";
        if (!email.trim()) newErrors.email = "Email é obrigatório";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email inválido";
        if (!message.trim()) newErrors.message = "Mensagem é obrigatória";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("access_key", "df9b0847-66b2-462e-a516-4eaf3ba3c06f"); // Substitua pela sua chave

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                alert("Mensagem enviada com sucesso!");
                setName("");
                setEmail("");
                setMessage("");
                setErrors({});
            } else {
                alert("Erro ao enviar mensagem.");
            }
        } catch (err) {
            console.error(err);
            alert("Erro ao enviar mensagem.");
        }
    };

    return (
        <StyledContact>
            <Container maxWidth="sm">
                <Typography 
                    variant="h3" 
                    textAlign="center" 
                    fontWeight="600" 
                    color="primary" 
                    fontSize={{ xs: "1.75rem", md: "3rem" }}
                    gutterBottom
                >
                    Entre em Contato
                </Typography>
                <br/>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label="Nome"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={!!errors.name}
                                helperText={errors.name}
                                InputLabelProps={{ style: { color: "white" } }}
                                sx={{
                                    input: { color: "white" },
                                    fieldset: { borderColor: "rgba(255,255,255,0.3)" },
                                    "&:hover fieldset": { borderColor: "rgba(0,124,240,0.7)" }
                                }}
                            />
                        </Grid>

                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}
                                InputLabelProps={{ style: { color: "white" } }}
                                sx={{
                                    input: { color: "white" },
                                    fieldset: { borderColor: "rgba(255,255,255,0.3)" },
                                    "&:hover fieldset": { borderColor: "rgba(0,124,240,0.7)" }
                                }}
                            />
                        </Grid>

                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label="Mensagem"
                                multiline
                                rows={5}
                                variant="outlined"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                error={!!errors.message}
                                helperText={errors.message}
                                InputLabelProps={{ style: { color: "white" } }}
                                sx={{
                                    textarea: { color: "white" },
                                    fieldset: { borderColor: "rgba(255,255,255,0.3)" },
                                    "&:hover fieldset": { borderColor: "rgba(0,124,240,0.7)" }
                                }}
                            />
                            <Link
                                
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.info("I'm a button.");
                                    window.open("https://web3forms.com/privacy", "_blank");
                                    
                                }}
                            >
                                Ao enviar este formulário, você concorda com a política de privacidade.
                            </Link>
                        </Grid>

                        <Grid size={12} display="flex" justifyContent="center">
                            <StyledButton type="submit" startIcon={<EmailIcon />}>
                                Enviar Mensagem
                            </StyledButton>
                        </Grid>
                    </Grid>
                </form>

            </Container>
        </StyledContact>
    );
};

export default Contact;
