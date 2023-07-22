import checkLocalStorage from "../utils/checkLocalStorage";
import { Car, CarWithId } from "./apiType";

const API_URL = 'http://127.0.0.1:3000';
export const NUMBER_CARS_ON_PAGE = 7;
const QUERY_URL = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners'
}

interface QueryParams {
  key: string;
  value: number;
}

function generateQueryString(queryParams: QueryParams[] = []): string {
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
    console.error('error: ', error);
    throw error;
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
    console.error('error: ', error);
    throw error;
  }
}

export async function getCar(id: number): Promise<CarWithId> {
  try {
    const response: Response = await fetch(`${API_URL}${QUERY_URL.garage}/${id}`, {
      method: 'GET'
    });
    const data = await response.json() as CarWithId;
    console.log('getCar data: ', data);
    return data;
  } catch (error) {
    console.error('error: ', error);
    throw error;
  }
}

// await getCar(1);

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
    console.error('error: ', error);
    throw error;
  }
}
