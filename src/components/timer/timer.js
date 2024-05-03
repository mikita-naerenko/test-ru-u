import { useTimer } from './use-timer'
import { TimerContainer, TimeInput, TimeDisplay, StartButton } from './style'


const Timer = () => {
  const {
    minutes,
    seconds,
    isActive,
    setMinutes,
    handleStart
  } = useTimer();

  return (
    <TimerContainer>
      <TimeDisplay>
        {isActive ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}` : 'Введите время и нажмите Enter'}
      </TimeDisplay>
      <TimeInput
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        placeholder="Введите минуты"
      />
      
      <StartButton onClick={handleStart}>Запустить таймер</StartButton>
    </TimerContainer>
  );
};

export default Timer;


