import { FormEvent, useContext, useState }  from 'react';
import { Context } from '../../Context/AuthContext';
import { Container, OverLy, Header, Form, InputGroup } from './styles';

import api from '../../services/api';

function ModalCreateTool() {

  const { closeModalCreateToll ,updateComponent } = useContext(Context);

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription]= useState('');
  const [tags, setTags] = useState('');


  async function handleCreateTool(e: FormEvent){
    e.preventDefault();

    const tagsInArrey = tags.trim().split(" ");

     await api.post('/tools', {
      title: name,
      link,
      description,
      tags: tagsInArrey
    });

     updateComponent()
    closeModalCreateToll();

  }

  return (
    <OverLy>
      <Container>
        <Header>
          <span>+Add new Modal</span>
        
        </Header>
      <button onClick={closeModalCreateToll}> X </button>

      <Form onSubmit={handleCreateTool}>
        <InputGroup>
          <label htmlFor=""><p>Tool Name</p></label>
          <input type="text" 
            name="" id=""
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor=""><p>Tool Link</p></label>
          <input type="text"
            name="" id=""
            value={link}
            onChange={e => setLink(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor=""><p>Tool Description</p></label>
          <textarea name="" 
              id="" rows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            >
            
            </textarea>
        </InputGroup>

        <InputGroup>
          <label htmlFor=""><p>Tags</p></label>
          <input type="text" name="" id=""
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
        </InputGroup>
        <button type="submit">Add Tool</button>
      </Form>
      </Container>
    </OverLy>
  );
}

export default ModalCreateTool;

