import { createSlice } from '@reduxjs/toolkit';
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

interface FlightsState {
  flights: Flight[];
  activeSort: string;
}

const initialState: FlightsState = flights;

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    sortByPrice: (state, action) => {
      state.flights.sort((a, b) => {
        return parseFloat(a.price.replace(/\s+/g, '')) - parseFloat(b.price.replace(/\s+/g, ''));
      });
      state.activeSort = action.payload;
    },
    sortByTime: (state, action) => {
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

      state.flights.sort((a, b) => {
        const timeA = calculateMinutes(a.countTime);
        const timeB = calculateMinutes(b.countTime);
        return timeA - timeB;
      });
      state.activeSort = action.payload;
    },
    sortByOptimal: (state, action) => {
      const calculateOptimality = (flight) => {
        const stopsValue = flight.stops === 'Без пересадок' ? 0 : parseInt(flight.stops.match(/\d+/));
        const durationValue = parseInt(flight.countTime.match(/\d/g).join(''));
        const priceValue = parseInt(flight.price.replace(/\s/g, ''));

        return priceValue / (durationValue + stopsValue);
      };

      state.flights.sort((a, b) => {
        const optimalityA = calculateOptimality(a);
        const optimalityB = calculateOptimality(b);

        return optimalityB - optimalityA; // Сортировка от самого оптимального до самого неоптимального
      });
      state.activeSort = action.payload;
    },
  },
});

export const { actions, reducer } = flightSlice;
