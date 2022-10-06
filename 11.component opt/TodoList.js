/*
    react-virtualized를 이용해 스크롤 밑의 컴포넌트는 렌더링 하지 않도록 변경할 수 있음
    1. yarn add react-virtualized
    2. 각 항목의 실제크기를 px단위로 알아내기 (개발자도구 이용)

*/

import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';
import React, { useCallback } from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle],
  );

  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} //항목 개수
      rowHeight={57} //항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }}
    />
  );
};

//리스트로 사용되는 컴포넌트 자체도 최적화 해주는것이 필요
export default React.memo(TodoList);
