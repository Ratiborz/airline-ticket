import s from './Transfers.module.scss';

export const Transfers = () => {
  return (
    <div className={s.transfers}>
      <h3 className={s.transfers__h3}>Количество пересадок</h3>
      <ul className={s.transfers__ul}>
        <li className={s.transfers__li}>Без пересадок</li>
        <li className={s.transfers__li}>1 пересадка</li>
        <li className={s.transfers__li}>2 пересадки</li>
        <li className={s.transfers__li}>3 пересадки</li>
      </ul>
    </div>
  );
};
