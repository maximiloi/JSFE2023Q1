import { getCar } from "../api/apiGarage";
import { CarWinner, CarWinnerWithColorAndName, CarWithId } from "../api/apiType";

async function getSortData(dataWinners: CarWinner[]): Promise<CarWinnerWithColorAndName[]> {
  const tempWinnersArr: CarWinner[] = dataWinners;
  const tempCarArr: CarWithId[] = await Promise.all(
    tempWinnersArr.map((winner): Promise<CarWithId> => getCar(winner.id)));

  const resultWinnersArr: CarWinnerWithColorAndName[] = tempWinnersArr.map((winner): CarWinnerWithColorAndName => {
    const foundCar = tempCarArr.find((car) => car.id === winner.id);
    return { ...winner, ...foundCar, color: foundCar?.color || '', name: foundCar?.name || '' };
  });

  return resultWinnersArr;
}

export default getSortData;
