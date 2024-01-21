import GlobalImage from '../../assets/images/GlobalImage';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <GlobalImage id="plane" />
      <h1 className={s.header__title}>Поиск авиабилетов</h1>
    </header>
  );
};
