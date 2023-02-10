import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; 

import Form from "components/contactForm/Form.js";

// Hero :
import Hero from "components/hero/TwoColumnWithVideo.js";
import Hero1 from "components/hero/TwoColumnWithInput.js";
import Hero2 from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Hero3 from "components/hero/TwoColumnWithPrimaryBackground.js";
import Hero4 from "components/hero/FullWidthWithImage.js";
import Hero5 from "components/hero/BackgroundAsImage.js";
import Hero6 from "components/hero/BackgroundAsImageWithCenteredContent.js";


// Features : 
import Features from "components/features/ThreeColSimple.js";
import Features1 from "components/features/ThreeColWithSideImage.js";
import Features2 from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Features3 from "components/features/VerticalWithAlternateImageAndText.js";
import Features4 from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature1 from "components/features/TwoColSingleFeatureWithStats.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature3 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
//Eklenen:
import MainFeature4 from "components/features/TwoColWithTwoFeaturesAndButtons";


// Pricing Page :
import Pricing from "components/pricing/ThreePlans.js";
import Pricing1 from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Pricing2 from "components/pricing/TwoPlansWithDurationSwitcher.js";


// Cards : 
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Profile from "components/cards/ProfileThreeColGrid.js";
import ThTab from "components/cards/ThreeColContactDetails.js";


// Blogs :
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Blog1 from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Blog2 from "components/blogs/PopularAndRecentBlogPosts.js";
import Blog3 from "components/blogs/GridWithFeaturedPost.js";


// Testimonials :
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import Testimonial1 from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Testimonial2 from "components/testimonials/TwoColumnWithImageAndRating.js";
import Testimonial3 from "components/testimonials/ThreeColumnWithProfileImage.js";
import Testimonial4 from "components/testimonials/SimplePrimaryBackground.js";


// faqs :
import FAQ from "components/faqs/SimpleWithSideImage.js";
import FAQ1 from "components/faqs/SingleCol.js";
import FAQ2 from "components/faqs/TwoColumnPrimaryBackground.js";


// Forms : 
import ContactUsForm from "components/forms/SimpleContactUs.js";
import ContactUsForm1 from "components/forms/TwoColContactUsWithIllustration.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";


// cta :
import GetStarted from "components/cta/GetStarted.js";
import GetStarted1 from "components/cta/GetStartedLight.js";
import DownloadApp from "components/cta/DownloadApp.js";


// Footers : 
import Footer from "components/footers/SimpleFiveColumn.js";
import Footer1 from "components/footers/FiveColumnWithInputForm.js";
import Footer2 from "components/footers/FiveColumnWithBackground.js";
import Footer3 from "components/footers/FiveColumnDark.js";
import Footer4 from "components/footers/MiniCenteredFooter.js";


/* Ready Made Pages (from demos folder) */
import Narval from "demos/Narval.js"
import EventLandingPage from "demos/EventLandingPage.js";
import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
import AgencyLandingPage from "demos/AgencyLandingPage.js";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
import ServiceLandingPage from "demos/ServiceLandingPage.js";
import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";


/* Inner Pages */
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";


// import ComponentRenderer from "ComponentRenderer.js";
// import MainLandingPage from "MainLandingPage.js";
// import ThankYouPage from "ThankYouPage.js";

//Deneme: 



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>

    {/* <PricingPage></PricingPage> */}
    {/* <AboutUsPage></AboutUsPage>
    <ContactUsPage></ContactUsPage> */}
    {/* <BlogIndexPage></BlogIndexPage> */}

      <GlobalStyles />

      {/* <Narval/> */}

      {/* <Hero5/> */}
      {/* <Features4/> */}
      {/* <MainFeature3/>
      <MainFeature/> */}
      {/* <FeatureStats/> */}
      {/* <Blog/>
      <Blog1/> */}
      {/* <ContactUsForm/>  */}
      {/* <Footer3/> */}

      {/* Belki :  */}
      {/* <FAQ/> */}
      {/* <FAQ1/> */}

{/* <Features1/> */}



      {/* <Narval/> */}
      

      <Router>
        <Routes>
        <Route path="/contactForm/Form" element={<Form/>}></Route>
          <Route path="/blogs/ThreeColSimpleWithImageAndDashedBorder" element={<Blog1/>}></Route>
          <Route path="/faqs/SimpleWithSideImage" element={<FAQ/>}></Route>
          <Route path="/forms/SimpleContactUs" element={<ContactUsForm/>}></Route>
          <Route path="/" element={<Narval/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;


// <Router>
//         <Routes>
//           <Route path="/pages/AboutUs" element={<AboutUsPage/>}></Route>
//           <Route path="/forms/SimpleContactUs" element={<ContactUsForm/>}></Route>
//           <Route path="/" element={<Narval/>}></Route>


//           <Route path="/pages/AboutUs" element={<AboutUsPage/>}></Route>
//           <Route path="/pages/BlogIndex" element={<BlogIndexPage/>}></Route>
//           <Route path="/" element={<PricingPage/>}></Route>


//           <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
//           <Route path="/components/:type/:name" element={<ComponentRenderer />} />
//           <Route path="/thank-you" element={<ThankYouPage />} />
//           <Route path="/" element={<MainLandingPage />} />
//         </Routes>
//       </Router>