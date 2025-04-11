import { NavBar } from "../../components/NavBar/NavBar"
import { About } from "./sections/About/About"
import { Hero } from "./sections/Hero/Hero"
import { Projects } from "./sections/Projetcs/Projects"

export const Home = () =>{
    return(
        <div>
            <NavBar />
            <Hero />
            <About />
            <Projects />
        </div>
    )
}