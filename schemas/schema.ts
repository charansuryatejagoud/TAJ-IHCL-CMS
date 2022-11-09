import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import Header from "./Header/Header";
import Card from "./Homepage/Card";
import Chatbot from "./Homepage/Chatbot";
import Search from "./Homepage/Search";
import Icons from "./Homepage/Icons";
import Navigation from "./Homepage/Navigation";
import Button1 from "./Homepage/Button1";
import Button2 from "./Homepage/Button2";
import Footer from "./Footer/Footer";
import ctalabel from "./Homepage/ctalabel";
import Items from "./Homepage/Items";
import Quicklinks from "./Homepage/Quicklinks";
import Support from "./Homepage/Support";
import Pages from "./Homepage/Pages";
import Brands from "./Homepage/Brands";
import Fields from "./Homepage/Fields";
import Instagrambutton from "./Homepage/InstagramButton";
import Downloadbuttons from "./Homepage/Downloadbuttons";
import Group from "./Homepage/Group";
import Bottom from "./Homepage/Bottom";
import header1 from "./Header/header1";
import Herobanner from "./Homepage/Banner";


import Videobutton from "./Homepage/Videobutton";
import BlockContent from "./Homepage/BlockContent";
import Tabs from "./Homepage/Tabs";

import details from "./Detailspage2/details";


import variantHeader from "./Homepage/variantHeader";
import variantFooter from "./Homepage/variantFooter";
import carouselItems from "./Detailspage2/carouselItems";
import Carousel from "./Detailspage2/Carousel";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([Header,Card,Chatbot,Icons,Navigation,Button1,Button2,
    Footer,ctalabel,Items,Quicklinks,Support,Pages,Brands,Fields,Search,Bottom,
    Instagrambutton,Downloadbuttons,Group,header1,Herobanner,Carousel,Videobutton,
    BlockContent,Tabs,details,variantFooter,carouselItems,variantHeader]),});
 