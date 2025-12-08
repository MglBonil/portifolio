import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../../../../theme";

const StyledHero = styled("div")({
	backgroundColor: theme.palette.secondary.main,
	height: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "80px 0 40px 0",

	"@media (max-width: 600px)": {
		height: "auto",
		minHeight: "100vh",
		padding: "100px 20px 60px 20px",
	},
});

const StyledButton = styled(Button)({
	background: "rgba(30, 30, 30, 0.6)",

	backdropFilter: "blur(10px)",
	boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
	border: "1px solid rgba(255,255,255,0.1)",
	top: "30px",

	"&:hover": {
		background: "rgba(30, 30, 30, 0.8)",
		boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
	}
});

const StyledImg = styled("img")({
	width: "100%",
	maxWidth: "280px",
	borderRadius: "50%",
	display: "block",
	margin: "0 auto"
});

const GradientText = styled(Typography)({
	fontWeight: 600,
	background: "linear-gradient(90deg, rgb(0,124,240), rgb(0,223,216))",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
});

const Hero = () => {
	return (

		<StyledHero>

			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid
						size={{ xs: 12, md: 8 }}
						sx={{
							order: { xs: 2, md: 1 }
						}}
					>
						<Typography
							color="primary"
							variant="h1"
							textAlign="center"
							fontSize={{ xs: "2.5rem", md: "5rem" }}
							fontWeight="900"
							height="auto"
							width="auto"
						>
							Miguel Bonilha
						</Typography>

						<GradientText variant="h2" textAlign="center" height="auto" width="auto" fontSize={{ xs: "2.5rem", md: "4.5rem" }}>
							Desenvolvedor <br/> Full-Stack<br />
						</GradientText>

						<Grid container spacing={2} justifyContent="center">
							
							<Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center" >
								<StyledButton>
									<DownloadIcon /> Download CV
								</StyledButton>
								<br /><br />
							</Grid>

							<Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
								<a href="mailto:miguelbcassiano@gmail.com">
									<StyledButton>


										<EmailIcon />ㅤ ㅤContact Me


									</StyledButton>
								</a>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						size={{ xs: 12, md: 4 }}
						sx={{
							order: { xs: 1, md: 2 }
						}}
					>
						<StyledImg src={Avatar} alt="avatar" />
					</Grid>



				</Grid>
			</Container>
		</StyledHero>
	);
};

export default Hero;
