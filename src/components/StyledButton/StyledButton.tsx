import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
}


export const StyledButton : React.FC<StyledButtonProps> = ({children}) =>{
    
    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding:"5px 15px",
        width: "100%",
        display:"inline-flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"10px",

        color: theme.palette.primary.contrastText,
        '&:hover':{
            background: theme.palette.secondary.light
        }
    }))

    return(
       <>
        <StyledButton>{children}</StyledButton>
       </>
    )
}