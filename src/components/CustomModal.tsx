import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { createTodo, updateTodo } from './functions';

type CustomModalProps = {
  process: string;
  data: any;
};

const CustomModal = (props: CustomModalProps) => {
  // const formatDate = (aDate: Date) => {
  //   return `${aDate.getFullYear()}-${aDate.getMonth() + 1}-${aDate.getDate()}`;
  // };

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(
    props.data.title === undefined ? '' : props.data.title
  );
  // const [date, setDate] = useState(
  //   props.data.date === undefined
  //     ? formatDate(new Date())
  //     : formatDate(new Date(props.data.date))
  // );

  const [active, setActive] = useState(
    props.data.active === undefined ? false : props.data.active
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  // const handleChangeDate = (e: any) => {
  //   setDate(formatDate(new Date(e.target.value)));
  // };

  const handleChangeActive = (e: any) => {
    setActive(e.target.checked);
  };

  const handleCreateTodo = () => {
    createTodo(title, new Date(), active);
    handleClose();
    window.location.href = '/';
  };

  const handleModifyTodo = () => {
    if (props.data !== undefined) {
      updateTodo(
        props.data.id,
        title,
        props.data.strDate,
        props.data.date,
        active
      );
      handleClose();
      window.location.href = '/';
    }
  };

  return (
    <>
      <Button
        variant={props.process === 'add' ? 'success' : 'primary'}
        onClick={handleShow}
        disabled={props.data.active}
      >
        {props.process === 'add' ? 'Créer une Todo' : 'Modifier'}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.process === 'add' ? 'Ajouter une Todo' : 'Modifier la Todo'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="mr-5">Activer</label>
          <FormControlLabel
            control={
              <Checkbox
                checked={active}
                onChange={handleChangeActive}
                name="toggleActive"
                color="primary"
              />
            }
            label=""
          />
          <div className="form-group">
            <label>Titre</label>
            <input
              type="text"
              onChange={handleChangeTitle}
              value={title}
              className="form-control"
            />
          </div>
          {/* <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              onChange={handleChangeDate}
              value={date}
              className="form-control"
            />
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          {props.process === 'add' ? (
            <Button variant="primary" onClick={handleCreateTodo}>
              Créer
            </Button>
          ) : (
            <Button variant="primary" onClick={handleModifyTodo}>
              Modifier
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
