import { styled, Typography } from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpg"
import { Box, Container, Grid } from "@mui/system"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround/AnimatedBackgorund";

export const Hero = () =>{
   
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display:"flex",
        alignItems:"center"
    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border:`1px solid ${theme.palette.primary.contrastText}`,
        position:"relative",
    }))
    
    return (
      <>
        <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box position="relative">
                  <Box position="absolute" width="130%" top={-100} right={0}>
                    <AnimatedBackground />
                  </Box>
                  <Box textAlign="center">
                    <StyledImg src={avatar} alt="Avatar Vinicius" />
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  textAlign="center"
                  color="primary.contrastText"
                  variant="h1"
                  pb={2}
                >
                  Vinicius Silva
                </Typography>
                <Typography
                  textAlign="center"
                  color="primary.contrastText"
                  variant="h2"
                >
                  I'm a Software Engineer
                </Typography>
                <Grid
                  container
                  display="flex"
                  justifyContent="center"
                  spacing={3}
                  pt={3}
                >
                  <Grid
                    size={{ xs: 12, md: 4 }}
                    display="flex"
                    justifyContent="center"
                  >
                    <StyledButton>
                      <FileDownloadIcon />
                      <Typography> Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 4 }}
                    display="flex"
                    justifyContent="center"
                  >
                    <StyledButton>
                      <EmailIcon />
                      <Typography>Contact Me</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </StyledHero>
      </>
    );
}