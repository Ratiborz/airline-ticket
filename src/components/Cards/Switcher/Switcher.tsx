import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';
import s from './Switcher.module.scss';

export const Switcher = () => {
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className={s.switcher}>
      <button className={s.switcher__btn} onClick={() => dispatch(increment)}>
        Самый дешевый
      </button>
      <button className={s.switcher__btn}>Самый быстрый</button>
      <button className={s.switcher__btn}>Самый оптимальный</button>
    </div>
  );
};
