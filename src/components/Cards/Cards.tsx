import { Switcher } from './Switcher/Switcher';
import s from './Cards.module.scss';
import GlobalImage from '../../assets/images/GlobalImage';
import race from '../../model/mock.json';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

interface Flight {
  id: number;
  price: string;
  currency: string;
  gap: string;
  countTime: string;
  company: string;
  stops: string;
}

interface FlightsResponse {
  flights: Flight[];
}

export const Cards = () => {
  console.log(race);
  return (
    <div className={s.wrapper__main}>
      <Switcher />

      {race.flights.map((flight: Flight) => (
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
