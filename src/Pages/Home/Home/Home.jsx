import AfterBanner from "../../../Components/AfterBanner/AfterBanner";
import RegisterLink from "../../../Components/RegisterLink/RegisterLink";
import Banner from "../Banner/Banner";
import CategoryOverView from "../CategoryOverView/CategoryOverView";
import PopularMenuOverview from "../PopularMenuOverview/PopularMenuOverview";
import OurFoodQuality from "./OurFoodQuality/OurFoodQuality";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AfterBanner></AfterBanner>
            <CategoryOverView></CategoryOverView>
            <OurFoodQuality></OurFoodQuality>
            <PopularMenuOverview></PopularMenuOverview>
            <RegisterLink></RegisterLink>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;