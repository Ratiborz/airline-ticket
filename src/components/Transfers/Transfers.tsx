import { useDispatch } from 'react-redux';
import s from './Transfers.module.scss';
import { actions } from '../../store/reducers/CardsSlice';

export const Transfers = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.transfers}>
      <h3 className={s.transfers__h3}>Количество пересадок</h3>
      <div className={s.wrapper__transfers}>
        <label className={s.transfers__li}>
          <input type="checkbox" onChange={() => dispatch(actions.sortByStops(0))} />
          <span className={s.custom_checkbox}></span>
          Без пересадок
        </label>
        <label className={s.transfers__li}>
          <input type="checkbox" onChange={() => dispatch(actions.sortByStops(1))} />
          <span className={s.custom_checkbox}></span>1 пересадка
        </label>
        <label className={s.transfers__li}>
          <input type="checkbox" onChange={() => dispatch(actions.sortByStops(2))} />
          <span className={s.custom_checkbox}></span>2 пересадки
        </label>
        <label className={s.transfers__li}>
          <input type="checkbox" onChange={() => dispatch(actions.sortByStops(3))} />
          <span className={s.custom_checkbox}></span>3 пересадки
        </label>
      </div>
    </div>
  );
};
