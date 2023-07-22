import { postCreateCar } from "../api/apiGarage";
import renderGarage from "../userInterface/main/renderGarage";

function generateRandomColor(): string {
  const symbols = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

async function generateCars(): Promise<void> {
  const CAR_BRANDS: string[] = ['Tesla', 'Mazda', 'BMW', 'Subaru', 'Porsche', 'Honda', 'Lexus', 'Toyota', 'Chrysler', 'Buick', 'Hyundai', 'Audi', 'Infiniti', 'Nissan', 'Dodge', 'Mini', 'Volkswagen', 'Kia', 'Volvo', 'Mercedes-Benz', 'Cadillac', 'Acura', 'Chevrolet', 'Ford', 'Jaguar', 'Lincoln', 'Jeep', 'Mitsubishi', 'Land Rover', 'Alfa Romeo'];
  const CAR_NAME: string[] = ['S', '3', 'LX', 'Diesel', 'GT', '4x4', '6', 'M', 'Turbo', 'ZAZ'];
  const COUNT_CAR: number = 100;

  const promisesArr = [];

  for (let i = 0; i < COUNT_CAR; i += 1) {
    const randomBrandIndex = Math.floor(Math.random() * CAR_BRANDS.length);
    const randomCarNameIndex = Math.floor(Math.random() * CAR_NAME.length);

    const randomBrandWord = CAR_BRANDS[randomBrandIndex];
    const randomCarNameWord = CAR_NAME[randomCarNameIndex];

    promisesArr.push(postCreateCar({ name: `${randomBrandWord} ${randomCarNameWord}`, color: generateRandomColor() }));
  }

  await Promise.all(promisesArr);

  await renderGarage();
}

export default generateCars;