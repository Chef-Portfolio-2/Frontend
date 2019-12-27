import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ChefPortfolio/ChefPortfolioPage.css';
import {axiosWithAuth} from './axiosAuthenticate/axiosWithAuth.js'

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
        .put(`http://localhost:3000/recipes/${recipeToEdit}`, recipeToEdit)
        .then(res => {
            setEditing(false)
        })
    };

  return (
    <div>
        <div className='editButtonContainer'>
      <Button className='editModalButton' onClick={toggle}>Edit</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit Recipe</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <Form>
                <FormGroup>
                    <Label></Label>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;