import { Helmet } from "react-helmet-async";
import CoverImage from "../Shared/CoverImage/CoverImage";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AllItemTab from "./AllItemTab";

import coverImg from '../../assets/img/sandwich.jpg'

const AllItems = () => {

    const categories = ['homeMenuOverview', 'burger', 'pizza', 'cake', 'wings', 'sandwich', 'bbq'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const homeMenuOverview = menu.filter(item => item.category === 'homeMenuOverview')
    const burger = menu.filter(item => item.category === 'burger')
    const pizza = menu.filter(item => item.category === 'pizza')
    const cake = menu.filter(item => item.category === 'cake')
    const wings = menu.filter(item => item.category === 'wings')
    const sandwich = menu.filter(item => item.category === 'sandwich')
    const bbq = menu.filter(item => item.category === 'bbq')
    return (
        <div>
            <Helmet>
                <title>Food Festival | Our Menu</title>
            </Helmet>

            <CoverImage img={coverImg} title={"All Items"} description={"This is our all items page, Here all the items are available"}></CoverImage>

            <div className="mt-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="mx-auto text-center space-x-5">
                        <Tab>Popular</Tab>
                        <Tab>Burger</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Cake</Tab>
                        <Tab>Chicken Wings</Tab>
                        <Tab>Sandwich</Tab>
                        <Tab>BBQ</Tab>
                    </TabList>
                    <TabPanel>
                        <AllItemTab
                            items={homeMenuOverview}
                        ></AllItemTab>
                    </TabPanel>

                    <TabPanel>
                        <AllItemTab
                            items={burger}>
                        </AllItemTab>
                    </TabPanel>

                    <TabPanel>
                        <AllItemTab
                            items={pizza}
                        ></AllItemTab>
                    </TabPanel>

                    <TabPanel>
                        <AllItemTab
                            items={cake}
                        ></AllItemTab>
                    </TabPanel>

                    <TabPanel>
                        <AllItemTab
                            items={wings}
                        ></AllItemTab>
                    </TabPanel>

                    <TabPanel>
                        <AllItemTab
                            items={sandwich}
                        ></AllItemTab>
                    </TabPanel>

                    <TabPanel>
                        <AllItemTab
                            items={bbq}
                        ></AllItemTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AllItems;