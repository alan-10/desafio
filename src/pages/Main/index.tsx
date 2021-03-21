import  { useState, useEffect , useContext } from 'react';
import Tools, { Tool } from '../../components/Tools' 
import api from '../../services/api';

import ModalCreateTool from '../../components/ModalCreateTool'
import { Context } from '../../Context/AuthContext';

import { Container, Content, OptionTools} from './styles';

function Main(){

  const { openModalCreateToll, opemModalCreateTool, loadingComponent } = useContext(Context)

  const [tool, setTool] = useState([]);
  const [checkedOnTags, setCheckedOnTags] = useState(false);



  useEffect(()=> {
    api.get('/tools').then( tool => {
      const data = tool.data
      setTool(data);
    })
  }, [loadingComponent]);

  async function updateChackedSearch(){
     setCheckedOnTags(!checkedOnTags);
    
  }

  async function searchByTags(value: string){


    if(checkedOnTags === false){
      const data = await api.get(`tools?q=${value}`);
      if(data){
        setTool(data.data);
      }
    }else {
      const data = await api.get(`/tools?tags_like=${value}`);
      if(data){
        setTool(data.data);
      }
    }

    
    
  }

  return (
    <Container>
      { opemModalCreateTool && <ModalCreateTool />}
      
      <Content>
          <h2>VUTTR</h2>
          <strong>Very Usefull Tools to Remember</strong>
          <OptionTools>
              <span>
                <input type="search" name="" id="" 
                  onChange={e => searchByTags(e.target.value)}
                />
                <label><input type="checkbox"
                    name="" id="search"
                    checked={checkedOnTags }
                   onChange={updateChackedSearch}
                 />
                <p>search in tag only</p></label>
              </span>
            <button onClick={openModalCreateToll} >+ Add</button>
          </OptionTools>

          {tool.map((toollItem: Tool) => {
            return(
              <Tools key={toollItem.id} tools={toollItem}/>
            )
          })}
       

      </Content>
    </Container>
  );
}

export default Main;