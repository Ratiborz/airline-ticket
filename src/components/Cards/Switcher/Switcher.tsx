import s from './Switcher.module.scss';

export const Switcher = () => {
  return (
    <div className={s.switcher}>
      <button className={s.switcher__btn}>Самый дешевый</button>
      <button className={s.switcher__btn}>Самый быстрый</button>
      <button className={s.switcher__btn}>Самый оптимальный</button>
    </div>
  );
};
