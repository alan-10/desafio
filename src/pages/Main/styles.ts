import styled from 'styled-components';

export const Container = styled.div`
 height: 100vh;
 max-width:100vw;
 display: flex;
 justify-content: center;
 padding: 0 30px ;
 

 @media(max-width:570px){
  padding:0;
 }
`;

export const Content = styled.div`
  max-width:750px;
  
  width: min-content(601px, 100%);
  margin-top: 0.5rem;
  border-radius:1rem;
  font-family:Arial, Helvetica, sans-serif;
  padding:4rem;
  line-height:2.8rem;

  >h2{
    font-size:2rem;
  }
 

  @media (max-width: 550px) {
    padding:0.6rem;
  }

  
`;

export const OptionTools = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

  >button{
    padding:6px 8px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:6rem;
  }

  >span {
    display:flex;
    align-items:center;

    > input[type="search"]{
      margin-right:0.5rem;
      outline:none;
      padding:0.2rem;
     
    }

    >label{
      
      display:flex;
      align-items:center;

      >P{
        margin-left:0.3rem;
      }
    }
  }

  @media (max-width: 500px){
    flex-direction:column;

    > span {
      flex-direction: column;
    }

    > button {
      width:70%;
    }

    input[type="search"]{
      width:75%;
      margin:0;
    }

  }

`;