import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import CreateItem from '../modals/CreateItem'
import ListItem from '../modals/ListItem';

toast.configure();
const AdminpanelView = () => {
    
    const [modal, setModal] = useState(false);
    const [itemsList, addItemsInList] = useState([]);

    const showDialog = () => {
        setModal(true);       
    }

    const toggle = () => {
        setModal(!modal);
    }

    useEffect(() => {
        axios.get('http://localhost:4000/items')
        .then(res => {
            addItemsInList(res.data.items);
        })
        .catch((error) => {
            toast.error('Something went wrong.', {position: toast.POSITION.TOP_CENTER})
        })
    }, [])

    const saveItem = (item) => {
        if(!item.name || !item.description || !item.price) {
            toast.error('Please fill all the details.', {position: toast.POSITION.TOP_CENTER})
        } else {
            axios.post('http://localhost:4000/items', item)
            .then(res => {
                setModal(false);
                addItemsInList(res.data.items);
            })
            .catch((error) => {
                toast.error('Something went wrong.', {position: toast.POSITION.TOP_CENTER})
                setModal(false);
            }) 
        }
    }

    const deleteItem = (item) => {
        let url = 'http://localhost:4000/items/' + item.id;
        axios.delete(url)
        .then(res => {
            let modifiedList = itemsList.filter(itm => itm.id !== res.data.item[0].id);
            addItemsInList(modifiedList);
        })
        .catch(error => {
            toast.error('Something went wrong.', {position: toast.POSITION.TOP_CENTER})
        })
    }

    const editItem = (item, itemId) => {
        let url = 'http://localhost:4000/items/' + itemId;
        axios.put(url, item)
            .then(res => {
                let modifiedItem = res.data.updatedItem;
                let indexValue = itemsList.findIndex(itm => itm.id === modifiedItem.id);
                let itms = [...itemsList];
                itms[indexValue] = modifiedItem;
                addItemsInList(itms);
            })
            .catch((error) => {
                toast.error('Something went wrong.', { position: toast.POSITION.TOP_CENTER })
            })
    }

    return (
      <>
        <div className="header">
            <h3>Inventory Admin Panel</h3>
            <button className="btn btn-primary" onClick={showDialog}>Add New Item</button>
        </div>
        <div className="item-container">
             {
                 itemsList.map((item) => <ListItem key= {item.id} item={item} deleteItem={deleteItem} editItem={editItem}></ListItem>)
             }
        </div>
        <CreateItem modal = {modal} toggle={toggle} saveItem={saveItem}/>
      </>
    )
}

export default AdminpanelView