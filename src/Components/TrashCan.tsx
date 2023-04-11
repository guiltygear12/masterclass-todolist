import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { IAreaProps, IBoardProps } from '../atoms';
import styled from 'styled-components';

const Area = styled.div<IAreaProps>`
  padding: 20px 10px;
  background-color: ${(props) => (props.isDraggingOver ? '#81ecec' : props.isDraggingFromThis ? '#55efc4' : '#00b894')};
  flex-grow: 1;
  transition: all 0.3s;
`;

function TrashCan({ toDos, boardId }: IBoardProps) {
  return (
    <div>
      1
      <Droppable droppableId={boardId}>
        <Draggable></Draggable>
      </Droppable>
    </div>
  );
}
export default TrashCan;
