import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
import React, { useCallback } from 'react';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  const onClick = useCallback(
    (e) => {
      onRemove(id);
    },
    [onRemove, id],
  );

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={onClick}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

//React.memo라는 함수를 사용 (컴포넌트의 props가 바뀌지 않았다면 리렌더링 X)
export default React.memo(TodoListItem);
