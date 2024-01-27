import { useDispatch } from 'react-redux';
import { actions } from '../../../store/reducers/CardsSlice';
import s from './Switcher.module.scss';
import { useSelector } from 'react-redux';

export const Switcher = () => {
  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.flight.activeSort);

  return (
    <>
      <div className={s.switcher}>
        <button
          className={activeSort === 'price' ? `${s.switcher__btn} ${s.active}` : s.switcher__btn}
          onClick={() => dispatch(actions.sortByPrice('price'))}>
          Самый дешевый
        </button>
        <button
          className={activeSort === 'time' ? `${s.switcher__btn} ${s.active}` : s.switcher__btn}
          onClick={() => dispatch(actions.sortByTime('time'))}>
          Самый быстрый
        </button>
        <button
          className={activeSort === 'optimal' ? `${s.switcher__btn} ${s.active}` : s.switcher__btn}
          onClick={() => dispatch(actions.sortByOptimal('optimal'))}>
          Самый оптимальный
        </button>
      </div>
    </>
  );
};
