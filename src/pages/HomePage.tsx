import React from 'react';
import { Header, TodoList, CustomModal } from '../components/index';

function HomePage() {
  return (
    <>
      <Header />
      <div className="btn-create">
        <CustomModal process="add" data />
      </div>
      <TodoList />
    </>
  );
}

export default HomePage;
