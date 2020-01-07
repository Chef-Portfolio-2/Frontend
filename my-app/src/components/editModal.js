import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
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
      <Modal isOpen={modal} toggle={toggle} OnClick={() => editRecipe(recipes)} >
        <ModalHeader toggle={toggle}>Edit Recipe</ModalHeader>
        <ModalBody>
          
            <Form onSubmit={saveEdit} method="PUT">
              <FormGroup row> 
                <Label for="exampleFile" sm={2}>File</Label>
                <Col sm={10}>
                  <Input type="file" name="file" id="exampleFile"  />
                  <FormText color="muted">
                    Upload photos that are .JPEG, .JPG or .PNG.
                  </FormText>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Title</Label>
                <Input type="text" name="text" id="exampleText" 
                placeholder="Title" value={recipeToEdit.title} onChange={event => setRecipeToEdit({ ...recipeToEdit, title: event.target.value})} />
              </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle} onClick={() => setEditing(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;