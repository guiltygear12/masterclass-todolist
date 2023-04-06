import { atom, selector } from 'recoil';

export const minState = atom({
  key: 'mins',
  default: 0,
});

export const hourSelctor = selector<number>({
  key: 'hours',
  get: ({ get }) => {
    const min = get(minState);
    return min / 60;
  },
  set: ({ set }, newValue) => {
    console.log(newValue);
    const min = Number(newValue) * 60;
    set(minState, min);
  },
});
