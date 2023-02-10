import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark.js";
import axios from 'axios';
import { useState, useEffect } from 'react'



const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  const [forms, setforms] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3001/forms")
      .then((res) => setforms(res.data))
      .catch((e) => console.log(e))
  }, []);

  // const [formData, setformData] = useState({});

  // useEffect(() => {
  //   axios("")
  //     .then()
    
  // }, [addUser]);

  const [veri, setveri] = useState({
    name: "",
    email: "",
    message:"",
    phone: ""
  });

  const handleVeriSubmit = (veri) => {
    axios.post("http://localhost:3001/forms", veri)
      .then((res) => {setforms([...forms, res.data]);
        setveri({name: "", email: "", message: "", phone: ""})
      })
      .catch((e) => console.log(e))

  };

  const handleOnChange = (event) => {
    setveri({...veri, [event.target.name]: event.target.value});
  };


  return (
    <AnimationRevealPage>
      <Header/>
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>İletişime Geç!</h2>
            <form action="/contactForm/Form" target="_blank" onSubmit={(e) => {
              // e.preventDefault();
              handleVeriSubmit(veri);
            }} >
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Adınız</Label>
                    <Input id="name-input" type="text" name="name" placeholder="Ece Yılmaz" onChange={handleOnChange} value={veri.name}/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">E-posta Adresiniz</Label>
                    <Input id="email-input" type="email" name="email" placeholder="deneme@mail.com" onChange={handleOnChange} value={veri.email} />
                  </InputContainer>
                  {/* <InputContainer>
                  {
                    forms.map((data) => ( 
                    <div key={data.id}>
                      <h1>DENEME</h1>
                      <h1>{data.name}</h1>
                      <h1>{data.email}</h1>
                      <h1>{data.message}</h1>
                      <h1>{data.phone}</h1>

                    </div>))
                  }
                  </InputContainer> */}
                </Column>
                <Column>
                <InputContainer >
                    <Label htmlFor="phone-input">Telefon Numaranız</Label>
                    <TextArea id="phone-input" type="tel" name="phone" placeholder="(5--) --- -- --" pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}' onChange={handleOnChange} value={veri.phone} />
                  </InputContainer>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">İletmek İstediğiniz Mesaj</Label>
                    <TextArea id="message-input" name="message" placeholder="Projelerinizden Bahsedin" onChange={handleOnChange} value={veri.message} />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">Gönder</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
    <Footer/>
    </AnimationRevealPage>
  );
};
