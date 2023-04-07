import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div<{ isDragging: boolean }>`
  padding: 12px 8px;
  border-radius: 8px;
  margin-bottom: 4px;
  background-color: ${(props) => (props.isDragging ? '#74b9ff' : props.theme.cardColor)};
  box-shadow: ${(props) => (props.isDragging ? '0 0 8px rgba(0,0,0,0.3)' : 'none')};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided, snapshot) => (
        <Card isDragging={snapshot.isDragging} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
