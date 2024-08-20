import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import Faq from "./FAQ/Faq";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Testimonials/>
            <Faq/>
            <Contact/>
        </div>
    );
};

export default Home;