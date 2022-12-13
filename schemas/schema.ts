import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import Header from "./Header/header";
import Card from "./page/card";
import Search from "./page/bookingMask";
import Icons from "./page/icons";
import Footer from "./footer/footer";
import ctaLabel from "./page/ctaLabel";
import Items from "./page/items";
import Support from "./page/supportDetails";
import Pages from "./page/pages";
import Brands from "./page/brands";
import Group from "./page/group";
import heroBanner from "./page/banner";
import blockContent from "./page/blockContent";
import Tabs from "./page/tabs";
import Details from "./Detailspage/Details";
import variantHeader from "./page/variantHeader";
import variantFooter from "./page/variantFooter";
import carouselItems from "./Detailspage/carouselItems";
import Carousel from "./Detailspage/carousel";
import Media from "./page/media";
import demo from "./page/demo";
import CartIcon from "./Header/cartIcon";
import accordion from "./page/accordion";
import information from "./page/information";
import richText from "./page/richText";
import primaryButton from "./page/primaryButton";
import actions from "./page/actions";
import typography from "./page/typography";



export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    Header,
    Card,
    Icons,
    actions,
   primaryButton,
    Footer,
    ctaLabel,
    Items,
    Support,
    Pages,
    Brands,
    Search,
    Group,
    heroBanner,
    Carousel,
    blockContent,
    Tabs,
    Details,
    variantFooter,
    carouselItems,
    variantHeader,
    Media,
    demo,
    CartIcon,
    accordion,
    information,
    richText,
    typography

  ]),
});
