import { Helmet } from "react-helmet-async";
import CoverImage from "../Shared/CoverImage/CoverImage";

import coverImg from '../../assets/img/smImg2.jpg'
import useMenu from "../../Hooks/useMenu";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MenuTab from "./MenuTab";
import 'react-tabs/style/react-tabs.css';


const MenuPage = () => {

    const [menu] = useMenu();


    const homeMenuOverview = menu.filter(item => item.category === 'homeMenuOverview')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Food Festival | Our Menu</title>
            </Helmet>

            <CoverImage img={coverImg} title={"Our Menu"} description={"This is our Menu page,From here you can choose your favourite food"}></CoverImage>

            <div className="my-4">
                <Tabs>
                    <TabList>
                        <Tab>Popular</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <MenuTab items={homeMenuOverview}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={salad}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={pizza}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={soup}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={desserts}></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab items={drinks}></MenuTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MenuPage;