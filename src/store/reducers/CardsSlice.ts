import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import flights from '../../../db.json';

export interface Flight {
  id: number;
  price: string;
  currency: string;
  gap: string;
  countTime: string;
  company: string;
  stops: string;
}

export interface FlightsState {
  flights: Flight[];
  activeSort: string;
  selectedTransfers: Flight[];
  selectedCompany: Flight[];
}

const initialState: FlightsState = flights;

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    sortByPrice: (state, action: PayloadAction<string>) => {
      if (state.selectedTransfers.length > 0) {
        state.selectedTransfers.sort((a, b) => {
          return parseFloat(a.price.replace(/\s+/g, '')) - parseFloat(b.price.replace(/\s+/g, ''));
        });
      }
      if (state.selectedCompany.length > 0) {
        state.selectedCompany.sort((a, b) => {
          return parseFloat(a.price.replace(/\s+/g, '')) - parseFloat(b.price.replace(/\s+/g, ''));
        });
      } else {
        state.flights.sort((a, b) => {
          return parseFloat(a.price.replace(/\s+/g, '')) - parseFloat(b.price.replace(/\s+/g, ''));
        });
      }
      state.activeSort = action.payload;
    },
    sortByTime: (state, action: PayloadAction<string>) => {
      const calculateMinutes = (time: string): number => {
        const parts = time.split(' ');
        let totalMinutes = 0;
        for (let i = 0; i < parts.length; i += 2) {
          if (parts[i + 1] === 'ч') {
            totalMinutes += parseInt(parts[i]) * 60;
          } else if (parts[i + 1] === 'мин') {
            totalMinutes += parseInt(parts[i]);
          }
        }
        return totalMinutes;
      };

      if (state.selectedTransfers.length > 0) {
        state.selectedTransfers.sort((a, b) => {
          const timeA = calculateMinutes(a.countTime);
          const timeB = calculateMinutes(b.countTime);
          return timeA - timeB;
        });
      }
      if (state.selectedCompany.length > 0) {
        state.selectedCompany.sort((a, b) => {
          const timeA = calculateMinutes(a.countTime);
          const timeB = calculateMinutes(b.countTime);
          return timeA - timeB;
        });
      } else {
        state.flights.sort((a, b) => {
          const timeA = calculateMinutes(a.countTime);
          const timeB = calculateMinutes(b.countTime);
          return timeA - timeB;
        });
      }
      state.activeSort = action.payload;
    },
    sortByOptimal: (state, action: PayloadAction<string>) => {
      const calculateOptimality = (flight: Flight) => {
        const stopsValue = flight.stops === 'Без пересадок' ? 0 : parseInt((flight.stops.match(/\d+/) || ['0'])[0]);
        const durationValue = parseInt((flight.countTime.match(/\d/g) || ['0']).join(''));
        const priceValue = parseInt(flight.price.replace(/\s/g, ''));

        return priceValue / (durationValue + stopsValue);
      };

      if (state.selectedTransfers.length > 0) {
        state.selectedTransfers.sort((a, b) => {
          const optimalityA = calculateOptimality(a);
          const optimalityB = calculateOptimality(b);

          return optimalityB - optimalityA;
        });
      }
      if (state.selectedCompany.length > 0) {
        state.selectedCompany.sort((a, b) => {
          const optimalityA = calculateOptimality(a);
          const optimalityB = calculateOptimality(b);

          return optimalityB - optimalityA;
        });
      } else {
        state.flights.sort((a, b) => {
          const optimalityA = calculateOptimality(a);
          const optimalityB = calculateOptimality(b);

          return optimalityB - optimalityA; // Сортировка от самого оптимального до самого неоптимального
        });
      }
      state.activeSort = action.payload;
    },
    sortByStops: (state, action: PayloadAction<number>) => {
      const stopsValue = action.payload;

      // Фильтрация рейсов в зависимости от количества пересадок
      const filteredFlights = state.flights.filter((flight) => {
        const stops = flight.stops === 'Без пересадок' ? 0 : parseInt(flight.stops);
        // Извлечение количества пересадок из строки stops
        return stops === stopsValue;
      });

      // Проверка, есть ли отфильтрованные рейсы уже в массиве selectedTransfers
      filteredFlights.forEach((flight) => {
        const index = state.selectedTransfers.findIndex((selectedFlight) => selectedFlight.id === flight.id);
        if (index === -1) {
          state.selectedTransfers.push(flight); // Добавление рейса в массив selectedTransfers, если его там еще нет
        } else {
          state.selectedTransfers.splice(index, 1); // Удаление рейса из массива selectedTransfers, если он уже там есть
        }
      });
    },
    sortByCompany: (state, action: PayloadAction<string>) => {
      const companyName = action.payload;

      const filteredFlights = state.flights.filter((flight) => flight.company === companyName);

      //Проверка, есть ли отфильтрованные рейсы уже в массиве selectedTransfers
      filteredFlights.forEach((flight) => {
        const index = state.selectedCompany.findIndex((selectedFlight) => selectedFlight.id === flight.id);
        if (index === -1) {
          state.selectedCompany.push(flight); // Добавление рейса в массив selectedTransfers, если его там еще нет
        } else {
          state.selectedCompany.splice(index, 1); // Удаление рейса из массива selectedTransfers, если он уже там есть
        }
      });
    },
  },
});

export const { actions, reducer } = flightSlice;
