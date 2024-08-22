import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import CasouselGallery from "./CarouselGallery/CasouselGallery";
import CarouselTestimonial from "./CarouselTestimonial/CarouselTestimonial";
import Faq from "./FAQ/Faq";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Products/>
            <CasouselGallery/>
            <Faq/>
            <CarouselTestimonial/>
            <Contact/>
        </div>
    );
};

export default Home;