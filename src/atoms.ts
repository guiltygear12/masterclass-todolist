import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': ['1', '2', '3', '4', '5'],
    Doing: ['a', 'b', 'c', 'd', 'e'],
    Done: ['A', 'B', 'C', 'D', 'E'],
  },
});
