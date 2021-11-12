import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList";
import "../portfolio.scss";
import {
  featuredPortfolio,
  

} from "./data";
import styled from 'styled-components';
import { Modal } from '../Modal';

const item = styled.div`
  width: 1000px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1c2237;
  color: white;
  display: grid;
  grid-template-columns: 4fr 4fr;
  position: relative;
  z-index: -99;
  border-radius: 10px;
`;





export default function Portfolio() {

  
  
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
  
  ];
  

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
    
    }
 
  }, [selected]);

  
  const [showModal, setShowModal] = useState(false);

  const [id, setId] = useState(null)

  const openModal = (id) => {
    setShowModal(prev => !prev);
    setId(prev => id)
  };





  return (
    
    <div className="portfolio" id="portfolio">
     
      <h1>AREA OF EXPERTISE</h1>
      <br></br>
      <br></br>
      <br></br>
        {list.map((item) => (
          <PortfolioList 
          
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id }
          />
        ))}
        
     
      
      <div className="container">
      
        
        {data.map ((d) => ( 

          <>
          <div className="item3"onClick={() => openModal(d.id)}>
            <img 
              src={d.img} 
              alt="" 
            />
            <h3>{d.title }</h3>
          </div>
          </>
          
        ))}
        
        
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} id={id} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          
      <br></br>
    </div>
    
    
  );
  
}
