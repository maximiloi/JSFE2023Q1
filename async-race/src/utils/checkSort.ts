import { apiGetWinners } from "../api/apiGarage";
import rendersWinnerTable from "../userInterface/winners/rendersWinnerTable";
import getSortData from "./getSortData";

let sort = true;

async function rendersTablet(value: string) {
  if (sort) {
    const sortData = await getSortData(await apiGetWinners(`${value}`, 'ASC'))
    await rendersWinnerTable(sortData);
    sort = false;
  } else {
    const sortData = await getSortData(await apiGetWinners(`${value}`, 'DESC'))
    await rendersWinnerTable(sortData);
    sort = true;
  }
}

async function checkSort(value: string) {
  if (value === 'sort-id') {
    await rendersTablet('id')
  }

  if (value === 'sort-wins') {
    await rendersTablet('wins')
  }

  if (value === 'sort-time') {
    await rendersTablet('time')
  }
}

export default checkSort;