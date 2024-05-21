import { Helmet } from "react-helmet-async";
import AfterBanner from "../../../Components/AfterBanner/AfterBanner";
import RegisterLink from "../../../Components/RegisterLink/RegisterLink";
import Banner from "../Banner/Banner";
import CategoryOverView from "../CategoryOverView/CategoryOverView";
import MenuOverView from "../MenuOverView/MenuOverView";
import OurFoodQuality from "../OurFoodQuality/OurFoodQuality";
import PopularMenuOverview from "../PopularMenuOverview/PopularMenuOverview";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../Team/Team";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div>
            <Helmet>
                <title>Food Festival | Home</title>
            </Helmet>
            <div data-aos="fade-up" data-aos-duration="1500">
                <Banner></Banner>
            </div>
            <AfterBanner></AfterBanner>
            <CategoryOverView></CategoryOverView>
            <OurFoodQuality></OurFoodQuality>
            <MenuOverView></MenuOverView>
            <PopularMenuOverview></PopularMenuOverview>
            <RegisterLink></RegisterLink>
            <Team></Team>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;