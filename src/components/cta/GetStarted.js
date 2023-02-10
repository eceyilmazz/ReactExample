import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { useEffect, useState } from "react";
import axios from "axios";

// import { Subheading } from "components/misc/Headings";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-primary-500 rounded-lg relative`
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const TextContainer = tw(ColumnContainer)`text-2xl sm:text-4xl font-bold`;

// const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

const LinksContainer = tw(ColumnContainer)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(Link)`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;

const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl text-gray-100`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;

const SecondaryLink = tw(Link)`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`
export default (
  {
  text = "Developers all over the world are happily using Treact.",
  primaryLinkText = "Get Started",
  primaryLinkUrl = "http://timerse.com",
  secondaryLinkText = "Contact Us",
  secondaryLinkUrl = "http://google.com",
  pushDownFooter = true
}
) => {

  const [contents ,setcontents] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/featureStats")
      .then((res) => setcontents(res.data))
      .catch((e) => console.log(e))
  }, []);

  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <ContentWithPaddingXl>
      <PrimaryBackgroundContainer>

        {
          contents.map((content) => (
            <Row>
            <TextContainer>
              <Subheading>
              {content.description}
              </Subheading>
              <Heading>
                {content.heading}
              </Heading>
              {/* <Text>{text}</Text> */}
            </TextContainer>
            <LinksContainer>
              <PrimaryLink href="/">{content.btnContent}</PrimaryLink>
              {/* <SecondaryLink href={secondaryLinkUrl}>{secondaryLinkText}</SecondaryLink> */}
            </LinksContainer>
          </Row>
          ))
        }
       
        <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
      </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
