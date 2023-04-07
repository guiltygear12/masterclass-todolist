import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';
import Board from './Components/Board';

const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // 같은 보드 이동
      // 1. 새로운 배열에 복사
      setToDos((allBoards) => {
        console.log('같은디용?');
        // 모든 보드를 불러온뒤 출발지점의 보드만 남긴다
        const boardCopy = [...allBoards[source.droppableId]];
        // 1. 움직인 아이템을 기존 배열에서 삭제한다
        boardCopy.splice(source.index, 1);
        // 2. 삭제된 아이템을 새로운 배열에 추가한다
        boardCopy.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      console.log('다른디용?');
      setToDos((allBoards) => {
        const FromBoardCopy = [...allBoards[source.droppableId]];
        const ToBoardCopy = [...allBoards[destination.droppableId]];
        FromBoardCopy.splice(source.index, 1);
        ToBoardCopy.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: FromBoardCopy,
          [destination.droppableId]: ToBoardCopy,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board toDos={toDos[boardId]} key={boardId} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
