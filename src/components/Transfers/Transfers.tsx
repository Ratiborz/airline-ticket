import s from './Transfers.module.scss';

export const Transfers = () => {
  return (
    <div className={s.transfers}>
      <h3 className={s.transfers__h3}>Количество пересадок</h3>
      <div className={s.wrapper__transfers}>
        <label className={s.transfers__li}>
          <input type="checkbox" />
          <span className={s.custom_checkbox}></span>
          Без пересадок
        </label>
        <label className={s.transfers__li}>
          <input type="checkbox" />
          <span className={s.custom_checkbox}></span>1 пересадка
        </label>
        <label className={s.transfers__li}>
          <input type="checkbox" />
          <span className={s.custom_checkbox}></span>2 пересадки
        </label>
        <label className={s.transfers__li}>
          <input type="checkbox" />
          <span className={s.custom_checkbox}></span>3 пересадки
        </label>
      </div>
    </div>
  );
};
