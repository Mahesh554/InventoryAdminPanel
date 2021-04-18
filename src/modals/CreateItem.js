import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const CreateItem = ({modal, toggle, saveItem}) => {
   
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const handleSave = (e) => {
      e.preventDefault();
      let item = {
         name: name,
         description: description,
         price: price
      }
      saveItem(item);
      setName('');
      setDescription('');
      setPrice('');
    }

    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Item</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required= {true}></input>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required= {true}></textarea>
            </div>
            <div className="form-group">
              <label>Price (INR)</label>
              <input
                type="number"
                step="any"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required= {true}></input>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Add Item</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )   
}

export default CreateItem;