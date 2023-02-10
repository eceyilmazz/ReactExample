import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Referanslar from "components/features/TwoColWithButton.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/FiveColumnDark.js";
import Hizmetler from "components/features/DashedBorderSixFeatures.js";
import GetStarted from "components/cta/GetStarted.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Referanslar />
    <Hizmetler/>
    {/* <FeatureStats/> */}
    <GetStarted/>

    {/* <Blog />
    <Testimonial />
    <ContactUsForm /> */}
    <Footer />
  </AnimationRevealPage>
);
