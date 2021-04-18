import React, {useState} from 'react';
import {toast} from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

toast.configure();
const EditItem = ({modal, toggle, item, updateItem}) => {
   
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);

    const [dname, setdName] = useState(item.name);
    const [ddescription, setdDescription] = useState(item.description);
    const [dprice, setdPrice] = useState(item.price);
    const handleUpdate = (e) => {
      e.preventDefault();
      if(!dname || !ddescription || !dprice) {
        toast.error('Please fill all the values before submit', {position: toast.POSITION.TOP_CENTER});
      } else {
          setName(dname);
          setDescription(ddescription);
          setPrice(dprice);
          let item = {
              name: name,
              description: description,
              price: price
       }
      updateItem(item);
      }
    }
    const handleClose = (e) => {
        e && e.preventDefault();
        setdName(name);
        setdDescription(description);
        setdPrice(price);
        toggle();
    }

    const handleClosebtn = (e) => {
        e && e.preventDefault();
        setdName(name);
        setdDescription(description);
        setdPrice(price);
    }

    return (
      <Modal isOpen={modal} toggle={toggle} onClosed={handleClosebtn}>
        <ModalHeader toggle={toggle}>Update Item details</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text"
                className="form-control"
                value={dname}
                onChange={(e) => setdName(e.target.value)}
                required={true}></input>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={ddescription}
                onChange={(e) => setdDescription(e.target.value)}
                required={true}></textarea>
            </div>
            <div className="form-group">
              <label>Price (INR)</label>
              <input
                type="number"
                step="any"
                className="form-control"
                value={dprice}
                onChange={(e) => setdPrice(e.target.value)}
                required={true}></input>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Update Item</Button>{' '}
          <Button color="secondary" onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )   
}

export default EditItem;