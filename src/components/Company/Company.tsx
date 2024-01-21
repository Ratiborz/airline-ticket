import s from './Company.module.scss';

export const Company = () => {
  return (
    <div className={s.company}>
      <h3 className={s.company__h3}>Компании</h3>
      <div className={s.wrapper__radio}>
        <label htmlFor="win" className={s.radio_position}>
          <input id="win" type="radio" />
          <span className={s.custom_radio}></span>
          Победа
        </label>
        <label htmlFor="red" className={s.radio_position}>
          <input id="red" type="radio" />
          <span className={s.custom_radio}></span>
          Red Wings
        </label>
        <label htmlFor="s7" className={s.radio_position}>
          <input id="s7" type="radio" />
          <span className={s.custom_radio}></span>
          S7 Airlines
        </label>
      </div>
    </div>
  );
};
