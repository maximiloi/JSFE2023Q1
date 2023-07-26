import checkLocalStorage from "../utils/checkLocalStorage";
import { Car, CarWithId, CarWinner } from "./apiType";

const API_URL = 'http://127.0.0.1:3000';
export const NUMBER_CARS_ON_PAGE = 7;
const NUMBER_WINNERS_ON_PAGE = 15;
const QUERY_URL = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners'
}

interface QueryParams {
  key: string;
  value: number;
}

interface QueryParamsWinners {
  key: string;
  value: number | string;
}

function generateQueryString(queryParams: QueryParams[] | QueryParamsWinners[] = []): string {
  return queryParams.length ? `?${queryParams.map(x => `${x.key}=${x.value}`).join('&')}` : '';
}

export async function numberCarsInGarage(): Promise<number> {
  const numberPage: number = Number(checkLocalStorage());

  try {
    const queryParams: QueryParams[] = [{ key: '_page', value: numberPage }, { key: '_limit', value: NUMBER_CARS_ON_PAGE }]
    const response: Response = await fetch(`${API_URL}${QUERY_URL.garage}${generateQueryString(queryParams)}`, {
      method: 'GET'
    });
    const numberCars: number = Number(response.headers.get('X-Total-Count'));
    return numberCars;
  } catch (error) {
    throw new Error("Not required numberCarsInGarage");
  }
}

export async function getGarage(): Promise<CarWithId[]> {
  const numberPage: number = Number(checkLocalStorage());

  try {
    const queryParams: QueryParams[] = [{ key: '_page', value: numberPage }, { key: '_limit', value: NUMBER_CARS_ON_PAGE }]
    const response: Response = await fetch(`${API_URL}${QUERY_URL.garage}${generateQueryString(queryParams)}`, {
      method: 'GET'
    });
    const data = await response.json() as CarWithId[];
    return data;
  } catch (error) {
    throw new Error("Not required getGarage");
  }
}

export async function getCar(id: number): Promise<CarWithId> {
  try {
    const response: Response = await fetch(`${API_URL}${QUERY_URL.garage}/${id}`, {
      method: 'GET'
    });
    const data = await response.json() as CarWithId;
    return data;
  } catch (error) {
    throw new Error("Not required getCar");
  }
}

export async function putUpdareCar(id: number, data: Car): Promise<void> {
  try {
    await fetch(`${API_URL}${QUERY_URL.garage}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    throw new Error("Not required putUpdareCar");
  }
}

export async function postCreateCar(data: Car): Promise<void> {
  try {
    await fetch(`${API_URL}${QUERY_URL.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    throw new Error("Not required postCreateCar");
  }
}

export async function apiDeleteCar(id: number): Promise<void> {
  try {
    await fetch(`${API_URL}${QUERY_URL.garage}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error("Not required deleteCar");
  }
}

export async function apiGetWinners(sort: string = 'id', order: string = 'ASC'): Promise<CarWinner[]> {
  try {
    const queryParams: QueryParamsWinners[] = [
      { key: '_page', value: 1 },
      { key: '_limit', value: NUMBER_WINNERS_ON_PAGE },
      { key: '_sort', value: sort },
      { key: '_order', value: order },
    ]
    const response: Response = await fetch(`${API_URL}${QUERY_URL.winners}${generateQueryString(queryParams)}`, {
      method: 'GET'
    });
    const data = await response.json() as CarWinner[];
    return data;
  } catch (error) {
    throw new Error("Not required apiGetWinners");
  }
}