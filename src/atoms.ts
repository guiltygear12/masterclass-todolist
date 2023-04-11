import { atom, selector } from 'recoil';

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}
export interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}
export interface IForm {
  toDo: string;
}
export interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}
export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': [],
    Doing: [],
    Done: [],
  },
});
