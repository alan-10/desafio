import styled from 'styled-components';

export const OverLy = styled.div`
  background:rgba(0, 0, 0, 0.8);
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
  max-width: 450px;
  padding: 2rem 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius:3px;

  > button{
    position: absolute;
    top:0.4rem;
    right:0.4rem;
    background:red;
    padding: 0 0.1rem;
  }
`;

export const Header = styled.div`
  position:absolute;
  top:0.4rem;
  
  left:1rem;

`;

export const Form = styled.form`
margin-top:1rem;
width: 98%;

  >button {
    width:100%;
    height:3rem;
    margin-top:0.4rem;

    display:flex;
    justify-content:center;
    align-items: center;
    background:#8d9;
    border-radius:0.3rem;
  }
`;

export const InputGroup = styled.div`
  margin-top:1.1rem;

> input {
  width:100%;
  height:2.3rem;
  
  outline:none;
  padding:0.5rem;
  margin-top:0.5rem;
}
  >textarea {
    width:100%;
    height:4rem;
    border-radius: 0.2rem;
    outline:none;
    padding:0.5rem;
    margin-top:0.5rem;
  }
`;