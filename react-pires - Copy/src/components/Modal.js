import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useState } from "react";
import PortfolioList from "./PortfolioList";
import "./portfolio.scss";
import {
  dataa,
  

} from "./pages/dmodal";



const Background = styled.div`
  width: 0%;
  height: 0%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 1040px;
  height: 500px;
 margin-top: 600px;
  background: #1c2237;
  color: white;
  display: flex;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 99;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 80%;
  height: 80%;
  margin-top: 50px;
  margin-left:50px;
  border-radius: 10px 0 0 10px;
 
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 10px;
  line-height: 1.8;
  color: white;

  p {
    margin-bottom: 1rem;
    margin-right: 70px;
    margin-left: 70px;
    
    text-align: justify;
  }

  button {
    padding: 10px 24px;
    background: rgb(162, 196, 255);
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ id,showModal, setShowModal }) => {
  
  const [selected, setSelected] = useState("data");
  const [data, setData] = useState([]);
  
 

 useEffect(() => {
    switch (selected) {
      case "data":
        setData(dataa);
        break;
}
}, [selected]);
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
             
              <ModalContent>
              <br></br>
                <br></br>
                <h1>Climate Change Risk and Adaptation</h1>
                <br></br>
                <p>Responding to the global challenges that we are currently experiencing, we are a company that focuses on climate change risk and adaptation. We already have a lot of work on identifying climate change risks and recommending assessing what adaptation actions we could do and what is already being done. Most of our clients for this work come from the central government and local and international NGOs. We also often work closely with local governments to assess and implement climate change adaptation in the regions. We also have many experts in this field, both in the company's internal and external environment</p>
                <br></br>
                
                  
           
                
              </ModalContent>
                
              
              
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
