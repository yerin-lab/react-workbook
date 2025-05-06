import React, { useState } from 'react';
import './App.css';

import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' }
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 추가하기
  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 3, task: text }
    ]);
    setText('');
  };

  // 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
    setEditText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={addTodo} type='submit'>할 일 등록</Button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px' }}>
            {editingId === todo.id ? (
              <>
                <p>{todo.id}.</p>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <Button onClick={() => updateTodo(editingId, editText)}>수정 완료</Button>
                <Button onClick={() => setEditingId('')}>취소</Button>
              </>
            ) : (
              <>
                <h4>{todo.id}. {todo.task}</h4>
                <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
                <Button onClick={() => {
                  setEditingId(todo.id);
                  setEditText(todo.task);
                }}>수정 진행</Button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// 1. 리스트 숫자 중복
