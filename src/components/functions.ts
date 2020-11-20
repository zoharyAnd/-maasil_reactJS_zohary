/* eslint-disable @typescript-eslint/no-unused-vars */

// #region TODOS

const getAllTodo = () => {
  const todos = localStorage.getItem('todos');
  return JSON.parse(todos!);
};

const createTodo = (title: string, date: Date, active: boolean) => {
  const r = Math.random().toString(36).substring(7);
  const res = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate()
  )} à ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(
    date.getSeconds()
  )}`;

  const todo = {
    id: r,
    title,
    strDate: res,
    date: new Date(),
    active,
  };
  let currentTodos = JSON.parse(localStorage.getItem('todos')!);
  currentTodos = currentTodos === null ? [] : currentTodos;
  currentTodos.push(todo);
  currentTodos.sort((a: any, b: any) => {
    const c: any = new Date(a.date);
    const d: any = new Date(b.date);
    return d - c;
  });
  localStorage.setItem('todos', JSON.stringify(currentTodos));
  return JSON.parse(localStorage.getItem('todos')!);
};

const updateTodo = (
  id: string,
  title: string,
  strDate: string,
  date: Date,
  active: boolean
) => {
  const todo = {
    id,
    title,
    strDate,
    date,
    active,
  };
  const currentTodos = JSON.parse(localStorage.getItem('todos')!);
  currentTodos.map((todoItem: any, index: number) => {
    if (todoItem.id === todo.id) {
      currentTodos[index] = todo;
    }
    return todo;
  });
  localStorage.setItem('todos', JSON.stringify(currentTodos));
  return JSON.parse(localStorage.getItem('todos')!);
};

const deleteTodo = (item: any) => {
  const currentTodos = JSON.parse(localStorage.getItem('todos')!);
  currentTodos.map((todoItem: any, index: number) => {
    if (todoItem.id === item.id) {
      console.log(todoItem);
      currentTodos.splice(index, 1);
    }
    return todoItem;
  });
  localStorage.setItem('todos', JSON.stringify(currentTodos));
  return JSON.parse(localStorage.getItem('todos')!);
};

// #endregion TODOS

// #region COMMENTS
async function getPosts() {
  const BASE_URL = 'https://dummyapi.io/data/api';
  const APP_ID = '5fb6870db844a78ebff7c1ed';

  const res = await fetch(`${BASE_URL}/post`, {
    method: 'GET',
    headers: {
      'app-id': APP_ID,
    },
  });

  const posts = await res.json();
  return posts;
}

async function getComments(postId: string) {
  const BASE_URL = 'https://dummyapi.io/data/api';
  const APP_ID = '5fb6870db844a78ebff7c1ed';

  const res = await fetch(`${BASE_URL}/post/${postId}/comment`, {
    method: 'GET',
    headers: {
      'app-id': APP_ID,
    },
  });

  const comments = await res.json();
  return comments;
}
// #endregion COMMENTS

function addZero(myInt: number) {
  return myInt < 10 ? `0${myInt}` : myInt;
}

export {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  getComments,
  getPosts,
};
