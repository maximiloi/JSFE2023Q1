import { CarWithId } from "./apiType";

const API_URL = 'http://127.0.0.1:3000';
const NUMBER_CARS_ON_PAGE = 7;
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

async function getGarage(): Promise<CarWithId[] | null> {
  try {
    const queryParams: QueryParams[] = [{ key: '_page', value: 1 }, { key: '_limit', value: NUMBER_CARS_ON_PAGE }]
    const response: Response = await fetch(`${API_URL}${QUERY_URL.garage}${generateQueryString(queryParams)}`);
    console.log('response: ', response);
    const data = await response.json() as CarWithId[];
    return data;
  } catch (error) {
    console.error('error: ', error);
    return null;
  }
}

export default getGarage;