import AfterBanner from "../../../Components/AfterBanner/AfterBanner";
import RegisterLink from "../../../Components/RegisterLink/RegisterLink";
import Banner from "../Banner/Banner";
import CategoryOverView from "../CategoryOverView/CategoryOverView";
import MenuOverView from "../MenuOverView/MenuOverView";
import OurFoodQuality from "../OurFoodQuality/OurFoodQuality";
import PopularMenuOverview from "../PopularMenuOverview/PopularMenuOverview";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AfterBanner></AfterBanner>
            <CategoryOverView></CategoryOverView>
            <OurFoodQuality></OurFoodQuality>
            <MenuOverView></MenuOverView>
            <PopularMenuOverview></PopularMenuOverview>
            <RegisterLink></RegisterLink>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;