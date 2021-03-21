import { createContext, useState } from 'react';

interface ContextData {
  openModalCreateToll: () => void;
  closeModalCreateToll: () => void;
  opemModalCreateTool:boolean;
  openModalDelete: () => void;
  closeModalDelete:() => void;
  modalDelite: boolean;
  setIdTool: (id: string) => void;
  toolId: string;
  updateComponent: () => void;
  loadingComponent: boolean
}


export const Context  = createContext({} as ContextData); 

interface ContextProviderProps {
  children: React.ReactNode
}

export function ContextProvider( {children}: ContextProviderProps){

  const [opemModalCreateTool, setOpenModalCreateTool] = useState(false);
  const [modalDelite, setModalDelite] = useState(false);
  const [toolId, setToolId] = useState('');
  const [loadingComponent, setLoadingComponent]= useState(false);


  function openModalCreateToll(){
    setOpenModalCreateTool(true);
  }

  function closeModalCreateToll(){
    setOpenModalCreateTool(false);
  }

  function openModalDelete(){
    setModalDelite(true);
  }

  function closeModalDelete(){
    setModalDelite(false);
  }

  function setIdTool(id: string){
    setToolId(id)
  }

  function updateComponent(){
    setLoadingComponent(!loadingComponent)
  }
 

  return(
    <Context.Provider value={{
      openModalCreateToll,
      closeModalCreateToll,
      opemModalCreateTool,
      openModalDelete,
      closeModalDelete,
      modalDelite,
      setIdTool,
      toolId,
      updateComponent,
      loadingComponent
    }}>
      {children}
    </Context.Provider>
  )
}
 