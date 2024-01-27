import { Switcher } from './Switcher/Switcher';
import s from './Cards.module.scss';
import GlobalImage from '../../assets/images/GlobalImage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import { useSelector } from 'react-redux';
import { Flight } from '../../store/reducers/CardsSlice';

export const Cards = () => {
  const flights = useSelector((state) => state.flight.flights);
  const transfers = useSelector((state) => state.flight.selectedTransfers);

  return (
    <div className={s.wrapper__main}>
      <Switcher />

      {(transfers.length > 0 ? transfers : flights).map((flight: Flight) => (
        <div key={flight.id} className={s.card}>
          <div>
            <div className={s.card__price}>{flight.price} Р</div>
            <div className={s.card__direction}>SVO - LED</div>
            <div className={s.card__time}>{flight.gap}</div>
          </div>
          <div>
            <p className={s.card__way}>В пути</p>
            <span className={s.card__countTime}>{flight.countTime}</span>
          </div>
          <div>
            <GlobalImage id={flight.company} />
            <div className={s.card__transfers}>Пересадки</div>
            <span className={s.card__countTransfers}>{flight.stops}</span>
          </div>
        </div>
      ))}

      <LoadMoreBtn />
    </div>
  );
};
