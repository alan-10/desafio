import  { useContext } from 'react';
import { Tool, Header } from './styles';

import ModalDeliteToll from '../ModalDeliteTool';

import { Context } from '../../Context/AuthContext';
export interface Tool {
  id: string;
  title: string;
  link:string;
  description: string;
  tags: string[];
}

interface ToolsProps {
  tools: Tool;
}

const Tools:React.FC<ToolsProps> = ({ tools }) => {
  const { modalDelite, openModalDelete, setIdTool } = useContext(Context)

  function hanleDelete(){
    openModalDelete()
    setIdTool(tools.id)
  }

  return(
    <Tool>
      {modalDelite && <ModalDeliteToll />}
      
      <Header>
        <a href={tools.link}><h3>{tools.title}</h3></a>  
        <button onClick={hanleDelete}> <strong>X</strong> remover</button>      
      </Header>
      <p>{tools.description}</p> <br/>

      {tools.tags.map((tag, index) => (<strong key={index}>#{tag} </strong> ))}

    </Tool>
  )
}

export default Tools;