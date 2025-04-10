import { Button, styled, Typography } from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpg"
import { Container, Grid } from "@mui/system"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';

export const Hero = () =>{
   
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))
    
    return (
      <>
        <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid  size={{xs:12 ,md:4}}>
              <StyledImg src={avatar} alt="Avatar Vinicius" />
              </Grid>
              <Grid size={{xs:12, md:8}}>
                <Typography textAlign="center" color="primary" variant="h1">Vinicius Silva</Typography>
                <Typography textAlign="center" color="primary" variant="h2">I'm a Software Engineer</Typography>
                <Grid container display="flex" justifyContent="center">
                    <Grid size={{xs:12, md:3}} display="flex" justifyContent="center">
                    <Button>
                    <FileDownloadIcon />
                    Download CV</Button>
                    </Grid>
                    <Grid size={{xs:12, md:3}} display="flex" justifyContent="center">
                    <Button>
                    <EmailIcon/>
                    Contact Me</Button>
                    </Grid>
                </Grid>
               
               
               
              </Grid>
        
            </Grid>
            
          </Container>
        </StyledHero>
      </>
    );
}