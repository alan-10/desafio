import { useContext } from 'react';
import { OverLy, Container, Header, Footer } from './styles';
import { Context } from '../../Context/AuthContext';
import api from '../../services/api';

function ModalDeliteTool (){

  const { closeModalDelete , toolId, updateComponent} = useContext(Context);

  async function confirmDelite(){
    console.log(toolId)
    await api.delete(`/tools/${toolId}`);
    updateComponent()
    closeModalDelete();
  }

  return (
    <OverLy>
      <Container>
      <Header>
          <span><strong>X Remove tool</strong></span>
          <p>Are you aure you want to remove hotel?</p>
        </Header>
        <Footer>
          <button onClick={closeModalDelete}>Cancell</button>
          <button onClick={confirmDelite} >Yes, remove</button>
        </Footer>
      </Container>
    </OverLy>
  )
}

export default ModalDeliteTool;