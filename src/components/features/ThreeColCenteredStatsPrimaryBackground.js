import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";
import axios from "axios";

const Container = tw(ContainerBase)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
// const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

// const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
// const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
// const StatKey = tw.div`text-xl font-medium`
// const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;


export default (
//   {
//   subheading = "",
//   heading = "Gerçeğe Dönüştürün !",
//   description = "Hayalleriniz mi var?",
//   // stats = [
//   //   {
//   //     key: "Clients",
//   //     value: "2500+",
//   //   },
//   //   {
//   //     key: "Revenue",
//   //     value: "$100M+",
//   //   },
//   //   {
//   //     key: "Employees",
//   //     value: "150+",
//   //   },
//   // ]
// }
) => {
  const [contents ,setcontents] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/featureStats")
      .then((res) => setcontents(res.data))
      .catch((e) => console.log(e))
  }, []);



  return (
    <Container>
      <ContentWithPaddingXl>
        {
          contents.map((content) => (
            <HeadingContainer key={content.id}>
          <Description>{content.description}</Description>
          <Heading>{content.heading}</Heading>
          <PrimaryAction>{content.btnContent}</PrimaryAction>
        </HeadingContainer>
          ))
        }

        {/* <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          
          {description && <Description>{description}</Description>}
          <Heading>{heading}</Heading>
          <PrimaryAction>Hızlı Teklif Al</PrimaryAction>
        </HeadingContainer> */}


        {/* <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer> */}
      </ContentWithPaddingXl>
    </Container>
  );
};
