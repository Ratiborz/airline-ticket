import { useDispatch } from 'react-redux';
import s from './Company.module.scss';
import { actions } from '../../store/reducers/CardsSlice';

export const Company = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.company}>
      <h3 className={s.company__h3}>Компании</h3>
      <div className={s.wrapper__radio}>
        <label htmlFor="win" className={s.radio_position}>
          <input id="win" type="radio" onChange={() => dispatch(actions.sortByCompany('pobeda'))} />
          <span className={s.custom_radio}></span>
          Победа
        </label>
        <label htmlFor="red" className={s.radio_position}>
          <input id="red" type="radio" onChange={() => dispatch(actions.sortByCompany('red-wings'))} />
          <span className={s.custom_radio}></span>
          Red Wings
        </label>
        <label htmlFor="s7" className={s.radio_position}>
          <input id="s7" type="radio" onChange={() => dispatch(actions.sortByCompany('s7-airlines'))} />
          <span className={s.custom_radio}></span>
          S7 Airlines
        </label>
      </div>
    </div>
  );
};
