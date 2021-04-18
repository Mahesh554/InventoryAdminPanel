import React, {useState} from 'react'
import EditItem from './EditItem';

const ListItem = ({item, deleteItem, editItem}) => {

    const colorVal = Math.floor(Math.random()*10) % 5;
   
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const onclickDelete = () => {
        deleteItem(item);
    }

    const onclickEdit = () => {
        setModal(true);
    }

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateItem = (itm) => {
        editItem(itm, item.id);
        setModal(false);
    }

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ "backgroundColor": colors[colorVal].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ "backgroundColor": colors[colorVal].secondaryColor, "borderRadius": "10px" }}>{item.name}</span>
                <p className="mt-3" style={{"maxHeight": "50px", "overflow":"hidden"}}>{item.description}</p>
                <p className="mt-3">Rs. {item.price}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i className="far fa-edit mr-3" onClick={onclickEdit} style={{ "color": colors[colorVal].primaryColor, "cursor": "pointer" }}></i>
                    <i className="fas fa-trash-alt" onClick={onclickDelete} style={{ "color": colors[colorVal].primaryColor, "cursor": "pointer" }}></i>
                </div>
            </div>
            <EditItem modal={modal} toggle={toggle} item={item} updateItem={updateItem}/>
        </div>
    )
}

export default ListItem