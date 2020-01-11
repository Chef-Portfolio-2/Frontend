import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import './ChefPortfolio/ChefPortfolioPage.css';
import {axiosWithAuth} from './axiosAuthenticate/axiosWithAuth.js'
import EditPost from './EditPost';

const initialRecipe = {
    recipe:""
};

const EditModal = ({recipes}) => {
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);

    const toggle = () => setModal(!modal);

    const editRecipe = recipe => {
        setEditing(true);
        setRecipeToEdit(recipe);
    };

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://chef-portfolio-2.herokuapp.com/api/posts/${recipeToEdit}`, recipeToEdit)
        .then(res => {
            setEditing(false)
        })
    };

  return (
    <div>
        <div className='editButtonContainer'>
      <Button className='editModalButton' onClick={toggle}>Edit</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} OnClick={() => editRecipe(recipes)} >
        <ModalHeader toggle={toggle}>Edit Recipe</ModalHeader>
        <ModalBody>
          <EditPost />
        </ModalBody>
        <ModalFooter>
       
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;