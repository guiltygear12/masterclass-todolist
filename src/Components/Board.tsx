import { Droppable } from 'react-beautiful-dnd';
import DraggableCard from './DraggableCard';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { IAreaProps, IBoardProps, IForm, ITodo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

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
const From = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

function Board({ toDos, boardId }: IBoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newToDo, ...allBoards[boardId]],
      };
    });
  };
  return (
    <Wrapper>
      <Title> {boardId} </Title>
      <From onSubmit={handleSubmit(onValid)}>
        <input {...register('toDo', { required: true })} type="text" placeholder={`Add task on ${boardId}`} />
      </From>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)} ref={provided.innerRef} {...provided.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo.id} index={index} toDoId={toDo.id} toDoText={toDo.text} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
