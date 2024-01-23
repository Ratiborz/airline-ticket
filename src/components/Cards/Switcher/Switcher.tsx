import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import s from './Switcher.module.scss';
import { fetchUsers } from '../../../store/reducers/ActionCreators';

export const Switcher = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
      <div className={s.switcher}>
        <button className={s.switcher__btn}>Самый дешевый</button>
        <button className={s.switcher__btn}>Самый быстрый</button>
        <button className={s.switcher__btn}>Самый оптимальный</button>
      </div>
    </>
  );
};
