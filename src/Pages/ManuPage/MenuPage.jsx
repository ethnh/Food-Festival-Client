import { Helmet } from "react-helmet-async";
import CoverImage from "../Shared/CoverImage/CoverImage";

import coverImg from '../../assets/img/smImg2.jpg'
import useMenu from "../../Hooks/useMenu";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MenuTab from "./MenuTab";
import 'react-tabs/style/react-tabs.css';


import burgerImg from '../../assets/img/burger.jpg'
import pizzaImg from '../../assets/img/pizza.jpg'
import cakeImg from '../../assets/img/cake.jpg'
import sandwichImg from '../../assets/img/sandwich.jpg'
import kababImg from '../../assets/img/kabab.jpg'
import fryImg from '../../assets/img/fry.jpg'


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

            <div className="mt-10">
                <Tabs>
                    <TabList className="mx-auto text-center space-x-5">
                        <Tab>Popular</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <MenuTab
                            items={homeMenuOverview}
                            title={"homeMenuOverview"}
                            img={burgerImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={salad}
                            title={"salad"}
                            img={pizzaImg}>
                        </MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={pizza}
                            title={"pizza"}
                            img={cakeImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={soup}
                            title={"soup"}
                            img={sandwichImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={desserts}
                            title={"dessert"}
                            img={kababImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={drinks}
                            title={"drinks"}
                            img={fryImg}
                        ></MenuTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MenuPage;