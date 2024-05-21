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
            <div data-aos="fade-right" data-aos-duration="2000">
                <AfterBanner></AfterBanner>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000">
                <CategoryOverView></CategoryOverView>
            </div>

            <div data-aos="fade-right" data-aos-duration="2000">
                <OurFoodQuality></OurFoodQuality>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000">
                <MenuOverView></MenuOverView>
            </div>

            <div data-aos="fade-right" data-aos-duration="2000">
                <PopularMenuOverview></PopularMenuOverview>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000">
                <RegisterLink></RegisterLink>
            </div>

            <div data-aos="fade-right" data-aos-duration="2000">
                <Team></Team>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000">
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;