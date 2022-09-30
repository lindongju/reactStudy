import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback, useReducer } from 'react';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({ id: i, text: '할 일 ' + i, checked: false });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링 해보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]);

  //const [todos, setTodos] = useState(createBulkTodos);

  //두번째 파라미터에 초기상태 (undefined), createBulkTodos는 최초 렌더링 될때만 호출
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);
  //const nextId = useRef(2501);

  //todoInsert에 props으로 넘겨줌, props로 전달하는 함수를 만들때는 useCallBack으로 감싸주는걸 습관화
  // useState 사용
  // const onInsert = useCallback((text) => {
  //   const todo = {
  //     id: nextId.current,
  //     text,
  //     checked: false,
  //   };
  //   setTodos((todos) => todos.concat(todo));
  //   nextId.current += 1;
  // }, []);

  // useReducer 사용
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  // setTodos(todos.filter((todo) => todo.id !== id));
  // setTodos((todos) => todos.filter((todo) => todo.id !== id)); -- 함수형 업데이트
  // useState 사용
  // const onRemove = useCallback((id) => {
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // }, []);

  // useReducer 사용
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  // useState 사용
  // const onToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // }, []);

  // useReducer 사용
  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
