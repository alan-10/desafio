import styled from 'styled-components';

export const OverLy = styled.div`
  background:rgba(0, 0, 0, 0.3);
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  left: 0;

  display:flex;
  justify-content: center;
  align-items: center;
  color:black;
`;

export const Container = styled.div`
  background: white;
  width:100%;
  min-height:7rem;
  max-width: 450px;
  padding: 2rem 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius:3px;

`;


export const Header = styled.div`
  position:absolute;
  top:0.4rem;
  
  left:1rem;
  margin-bottom: 1rem;
`;

export const Footer = styled.div`
  position: absolute;
  right:0.4rem;
  bottom: 0.3rem;



  > button {
    padding:0.2rem;
    margin-right:0.1rem;
    }
  
  > button:last-child{
    
    background:rgb(255, 51, 51);
  }
`;

