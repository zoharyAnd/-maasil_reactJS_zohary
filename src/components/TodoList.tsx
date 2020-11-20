/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { ListItem, CustomModal } from './index';

import { deleteTodo, updateTodo } from './functions';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos') !== null) {
      const initTodos = JSON.parse(localStorage.getItem('todos')!);
      setTodos(initTodos);
    }
  }, []);

  const handleDeleteTodo = (item: any) => {
    deleteTodo(item);
    window.location.href = '/';
  };

  const handleModifyTodo = (item: any) => {
    updateTodo(item.id, item.title, item.strDate, item.date, !item.active);
    window.location.href = '/';
  };

  let listTsx;

  if (todos.length > 0) {
    listTsx = Object.values(todos).map((item: any, index: number) => {
      return (
        <div
          key={index}
          className={`todo-list-item ${item.active ? 'striped' : ''}`}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={item.active}
                onChange={() => handleModifyTodo(item)}
                name="toggleActive"
                color="primary"
              />
            }
            label={<ListItem data={item} />}
          />
          <div className="btn-wrapper">
            <CustomModal process="modify" data={item} />
            <button
              type="button"
              onClick={() => handleDeleteTodo(item)}
              className="btn btn-danger"
              disabled={item.active}
            >
              Supprimer
            </button>
          </div>
        </div>
      );
    });
  } else {
    listTsx = (
      <p className="empty">
        Vous n&apos; avez a pas de Todos disponibles. Veuillez en ajouter.
      </p>
    );
  }

  return <ul className="todo-wrapper">{listTsx}</ul>;
};

export default TodoList;
