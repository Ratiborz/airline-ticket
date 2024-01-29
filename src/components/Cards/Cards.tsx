import { Switcher } from './Switcher/Switcher';
import s from './Cards.module.scss';
import GlobalImage from '../../assets/images/GlobalImage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import { Flight } from '../../store/reducers/CardsSlice';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Cards = () => {
  const flights = useTypedSelector((state) => state.flight.flights);
  const transfers = useTypedSelector((state) => state.flight.selectedTransfers);
  const company = useTypedSelector((state) => state.flight.selectedCompany);
  const [lastUpdatedArray, setLastUpdatedArray] = useState('flights');

  useEffect(() => {
    if (company.length > 0) {
      setLastUpdatedArray('company');
    } else if (transfers.length > 0) {
      setLastUpdatedArray('transfers');
    } else {
      setLastUpdatedArray('flights');
    }
  }, [flights, transfers, company]);

  return (
    <div className={s.wrapper__main}>
      <Switcher />

      {(lastUpdatedArray === 'transfers' ? transfers : lastUpdatedArray === 'company' ? company : flights).map(
        (flight: Flight) => (
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
        )
      )}

      <LoadMoreBtn />
    </div>
  );
};
