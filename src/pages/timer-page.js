import Timer from '../components/timer/timer';
import { CenteredContainer } from '../components/ui'

const TimerPage = () => {
  return (
    <CenteredContainer>
      <h1>Таймер</h1>
      <Timer />
    </CenteredContainer>
  );
};

export default TimerPage;