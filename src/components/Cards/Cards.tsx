import { Switcher } from './Switcher/Switcher';
import s from './Cards.module.scss';
import { GlobalImage } from '../../assets/images/GlobalImage';
import { CardsSvg } from '../../assets/images/CardsSvg';

export const Cards = () => {
  return (
    <div className={s.wrapper__main}>
      <Switcher />
      <div className={s.card}>
        <div>
          <div className={s.card__price}>12 680 Р</div>
          <div className={s.card__direction}>SVO - LED</div>
          <div className={s.card__time}>12:00 - 16:30</div>
        </div>
        <div>
          <p className={s.card__way}>В пути</p>
          <span className={s.card__countTime}>4 ч 30 мин</span>
        </div>
        <div>
          <CardsSvg id="pobeda" />
          <div className={s.card__transfers}>Пересадки</div>
          <span className={s.card__countTransfers}>1 пересадка</span>
        </div>
      </div>
    </div>
  );
};
