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


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Food Festival | Home</title>
            </Helmet>
            <Banner></Banner>
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