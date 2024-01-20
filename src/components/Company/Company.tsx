import s from './Company.module.scss';

export const Company = () => {
  return (
    <div className={s.company}>
      <h3 className={s.company__h3}>Компании</h3>
      <ul className={s.company__ul}>
        <li className={s.company__li}>Победа</li>
        <li className={s.company__li}>Red Wings</li>
        <li className={s.company__li}>S7 Airlines</li>
      </ul>
    </div>
  );
};
