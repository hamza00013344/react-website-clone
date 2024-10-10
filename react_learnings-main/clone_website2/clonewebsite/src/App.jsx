import {Navbar} from "./Navbar";
import {HomePage } from "./Home";
import {Burger} from './Burgerpage';
import { Deliverypage } from "./Deliverypage";
import { Menu } from "./Menu";
import { Testimonials } from "./Testimonial";
import { Advert } from "./Advertising";
import { Footer } from "./Footer";
export default function App(){
    return(
        <>
            <Navbar />
            <HomePage />
            <Burger />
            <Deliverypage />
            <Menu />
            <Testimonials />
            <Advert /> 
            <Footer />
        </>
    );
}