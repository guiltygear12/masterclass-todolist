import { useRecoilState, useRecoilValue } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import { hourSelctor, minState } from './atoms';

function App() {
  const [min, setMin] = useRecoilState(minState);
  const [hours, setHours] = useRecoilState(hourSelctor);
  const onMinChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMin(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input value={min} onChange={onMinChange} type="number" placeholder="Min" />
      <input value={hours} onChange={onHoursChange} type="number" placeholder="Hour" />
    </div>
  );
}

export default App;
