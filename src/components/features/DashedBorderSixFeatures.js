import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";
import axios from 'axios';
import { useState, useEffect } from 'react'

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`
const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;


export default () => {
  const [cards,setcards] = useState([]);

  useEffect(()=> {
    axios("http://localhost:3001/hizmetler")
      .then((res)=>setcards(res.data))
      .catch((e) => console.log(e))
  }, []
  );



  // const cards = [
  //   {
  //     imageSrc: ShieldIconImage,
  //     title: "Web Sitesi Yazılımları",
  //     description: "Web sitenize en iyi tasarım ve yazılım ile sahip olun. İster size özel tasarımlar, isterseniz de hazır tasarımlarla işe koyulabiliriz."
  //   },
    // { imageSrc: SupportIconImage, title: "Mobil Uygulama Yazılımı", description: "Hayalinizdeki uygulamayı hayata geçirmek için yola bizimle çıkabilirsiniz." },
  //   { imageSrc: CustomizeIconImage, title: "Yazılım Geliştirme", description: "Mevcut yazılımınızı geliştirebilir ya da gelişimi için danışmanlık hizmeti alabilirsiniz." }
  //   // { imageSrc: ReliableIconImage, title: "Product Outreach" },
  //   // { imageSrc: FastIconImage, title: "PR Campaign" },
  //   // { imageSrc: SimpleIconImage, title: "Product Expansion" }
  // ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading> <span tw="text-primary-500">Hizmetlerimiz</span></Heading>
        {cards.map((card) => (
          <Column key={card.id}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
              <Link href={card.href}>{card.btnContent}</Link>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
