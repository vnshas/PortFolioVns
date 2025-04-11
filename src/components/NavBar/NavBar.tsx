
import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

export const NavBar = () =>{
    
    const StyledToolBar = styled(Toolbar)(() => ({
       display:"flex",
       justifyContent:"space-evenly"
    }))
    
    return(
        <>
            <AppBar position="sticky">
                <StyledToolBar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolBar>
            </AppBar>
        </>
    )
}