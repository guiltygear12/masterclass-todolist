import { Droppable } from 'react-beautiful-dnd';
import DraggableCard from './DraggableCard';
import styled from 'styled-components';

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Wrapper = styled.div`
  padding: 16px 0 12px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.boardColor};
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`;
const Area = styled.div<IAreaProps>`
  padding: 20px 10px;
  background-color: ${(props) => (props.isDraggingOver ? '#81ecec' : props.isDraggingFromThis ? '#55efc4' : '#00b894')};
  flex-grow: 1;
  transition: all 0.3s;
`;
interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title> {boardId} </Title>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)} ref={provided.innerRef} {...provided.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} index={index} toDo={toDo} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
