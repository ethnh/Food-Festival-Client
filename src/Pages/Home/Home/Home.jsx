import AfterBanner from "../../../Components/AfterBanner/AfterBanner";
import RegisterLink from "../../../Components/RegisterLink/RegisterLink";
import Banner from "../Banner/Banner";
import CategoryOverView from "../CategoryOverView/CategoryOverView";
import PopularMenuOverview from "../PopularMenuOverview/PopularMenuOverview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AfterBanner></AfterBanner>
            <CategoryOverView></CategoryOverView>
            <PopularMenuOverview></PopularMenuOverview>
            <RegisterLink></RegisterLink>
        </div>
    );
};

export default Home;