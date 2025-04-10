import { About } from "./sections/About/About"
import { Hero } from "./sections/Hero/Hero"
import { Projects } from "./sections/Projetcs/Projects"

export const Home = () =>{
    return(
        <div>
            <Hero />
            <About />
            <Projects />
        </div>
    )
}