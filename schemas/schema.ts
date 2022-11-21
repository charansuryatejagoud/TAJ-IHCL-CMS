import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import Header from "./Header/Header";
import Card from "./Homepage/Card";
import chatBot from "./Homepage/chatBot";
import Search from "./Homepage/Search";
import Icons from "./Homepage/Icons";
import Navigation from "./Homepage/Navigation";
import Button1 from "./Homepage/Button1";
import Footer from "./Footer/Footer";
import ctaLabel from "./Homepage/ctaLabel";
import Items from "./Homepage/Items";

import Support from "./Homepage/Support";
import Pages from "./Homepage/Pages";
import Brands from "./Homepage/Brands";
import Fields from "./Homepage/Fields";
import instagramButton from "./Homepage/InstagramButton";
import downloadButtons from "./Homepage/downloadButtons";
import Group from "./Homepage/Group";
import Bottom from "./Homepage/Bottom";
import header1 from "./Header/header1";
import heroBanner from "./Homepage/Banner";
import videoButton from "./Homepage/videoButton";
import blockContent from "./Homepage/blockContent";
import Tabs from "./Homepage/Tabs";
import Details from "./Detailspage2/Details";
import variantHeader from "./Homepage/variantHeader";
import variantFooter from "./Homepage/variantFooter";
import carouselItems from "./Detailspage2/carouselItems";
import Carousel from "./Detailspage2/Carousel";
import quickLinks from "./Homepage/quickLinks";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    Header,
    Card,
    chatBot,
    Icons,
    Navigation,
    Button1,
    Footer,
    ctaLabel,
    Items,
    quickLinks,
    Support,
    Pages,
    Brands,
    Fields,
    Search,
    Bottom,
    instagramButton,
    downloadButtons,
    Group,
    header1,
    heroBanner,
    Carousel,
    videoButton,
    blockContent,
    Tabs,
    Details,
    variantFooter,
    carouselItems,
    variantHeader,
  ]),
});
