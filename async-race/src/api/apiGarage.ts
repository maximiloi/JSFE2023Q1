import { stopAnimation } from '../utils/animateCar';
import checkLocalStorage from '../utils/checkLocalStorage';
import { Car, CarWithId, CarWinner, CarEngine } from './apiType';

const API_URL = 'http://127.0.0.1:3000';
export const NUMBER_CARS_ON_PAGE = 7;
const NUMBER_WINNERS_ON_PAGE = 15;
const QUERY_URL = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
};

interface QueryParams {
  key: string;
  value: number;
}

interface QueryParamsStart {
  key: string;
  value: string | number;
}

function generateQueryString(queryParams: QueryParams[] | QueryParamsStart[] = []): string {
  return queryParams.length ? `?${queryParams.map((param) => `${param.key}=${param.value}`).join('&')}` : '';
}

export async function apiNumberCarsInGarage(): Promise<number> {
  const numberPage: number = Number(checkLocalStorage());

  try {
    const queryParams: QueryParams[] = [
      { key: '_page', value: numberPage },
      { key: '_limit', value: NUMBER_CARS_ON_PAGE },
    ];
    const response: Response = await fetch(`${API_URL}${QUERY_URL.garage}${generateQueryString(queryParams)}`, {
      method: 'GET',
    });
    const numberCars: number = Number(response.headers.get('X-Total-Count'));
    return numberCars;
  } catch (error) {
    throw new Error('Not required numberCarsInGarage');
  }
}

export async function apiGetGarage(): Promise<CarWithId[]> {
  const numberPage: number = Number(checkLocalStorage());

  try {
    const queryParams: QueryParams[] = [
      { key: '_page', value: numberPage },
      { key: '_limit', value: NUMBER_CARS_ON_PAGE },
    ];
    const response: Response = await fetch(`${API_URL}${QUERY_URL.garage}${generateQueryString(queryParams)}`, {
      method: 'GET',
    });
    const data = (await response.json()) as CarWithId[];
    return data;
  } catch (error) {
    throw new Error('Not required getGarage');
  }
}

export async function apiGetCar(id: number): Promise<CarWithId> {
  try {
    const response: Response = await fetch(`${API_URL}${QUERY_URL.garage}/${id}`, {
      method: 'GET',
    });
    const data = (await response.json()) as CarWithId;
    return data;
  } catch (error) {
    throw new Error('Not required getCar');
  }
}

export async function apiUpdareCar(id: number, data: Car): Promise<void> {
  try {
    await fetch(`${API_URL}${QUERY_URL.garage}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error('Not required putUpdareCar');
  }
}

export async function apiPostCreateCar(data: Car): Promise<void> {
  try {
    await fetch(`${API_URL}${QUERY_URL.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error('Not required postCreateCar');
  }
}

export async function apiDeleteCar(id: number): Promise<void> {
  try {
    await fetch(`${API_URL}${QUERY_URL.garage}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error('Not required apiDeleteCar');
  }
}

export async function apiStarStopCar(idCar: number, status: string): Promise<CarEngine> {
  const engineStatus: string = status === 'start' ? 'started' : 'stopped';
  console.log('engineStatus: ', engineStatus);
  try {
    const QueryParamsStart: QueryParamsStart[] = [
      { key: 'id', value: idCar },
      { key: 'status', value: engineStatus },
    ];
    const response: Response = await fetch(`${API_URL}${QUERY_URL.engine}${generateQueryString(QueryParamsStart)}`, {
      method: 'PATCH',
    });
    const data = (await response.json()) as CarEngine;
    console.log('data: ', data);
    return data;
  } catch (error) {
    throw new Error('Not required apiStarStopCar');
  }
}

export async function apiDriveMode(idCar: number): Promise<void> {
  try {
    const QueryParamsStart: QueryParamsStart[] = [
      { key: 'id', value: idCar },
      { key: 'status', value: 'drive' },
    ];
    const response: Response = await fetch(`${API_URL}${QUERY_URL.engine}${generateQueryString(QueryParamsStart)}`, {
      method: 'PATCH',
    });

    console.log('response: ', response);
    if (!response.ok) {
      console.log('response: 500 ');
      stopAnimation();
    }
  } catch (error) {
    throw new Error('Not required apiDriveMode');
  }
}

export async function apiGetWinners(sort: string = 'id', order: string = 'ASC'): Promise<CarWinner[]> {
  try {
    const queryParams: QueryParamsStart[] = [
      { key: '_page', value: 1 },
      { key: '_limit', value: NUMBER_WINNERS_ON_PAGE },
      { key: '_sort', value: sort },
      { key: '_order', value: order },
    ];
    const response: Response = await fetch(`${API_URL}${QUERY_URL.winners}${generateQueryString(queryParams)}`, {
      method: 'GET',
    });
    const data = (await response.json()) as CarWinner[];
    return data;
  } catch (error) {
    throw new Error('Not required apiGetWinners');
  }
}
