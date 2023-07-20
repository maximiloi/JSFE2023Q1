import creatAddElementToPage from "../../utils/createElement";
import flagImage from '../../assets/flag.png';
import { CarWithId } from "../../api/apiType";

const carImage: string = `<svg height="40px" width="65px" viewBox="0 0 1280 806" xmlns="http://www.w3.org/2000/svg">
  <g transform = "matrix(.1 0 0 -.1 0 806)"><path d="m6736 8049c-1092-74-2057-470-2916-1198-188-159-476-443-656-646-119-133-241-282-414-503-296-377-501-556-734-641-47-16-187-53-313-81-340-75-481-121-698-224-229-110-368-208-517-364-245-258-394-613-452-1082-37-298-47-701-20-878 61-413 316-750 723-954l95-48h181c100 0 184 2 187 5s2 26-3 50c-22 118-30 309-20 448 25 314 83 530 216 802 115 237 242 411 431 595 330 320 725 516 1184 587 158 24 473 24 625 0 650-106 1178-456 1521-1010 240-386 352-889 299-1332-8-66-15-126-15-132 0-10 257-13 1250-13 688 0 1250 1 1250 3 0 1-7 52-15 112-17 128-19 351-5 480 65 580 362 1110 823 1467 644 498 1517 587 2252 229 655-319 1099-938 1191-1661 13-107 15-174 10-325-4-104-9-208-13-230l-6-40 54 46c30 25 88 85 130 132 326 367 480 883 429 1432-29 304-122 576-277 809-74 111-222 271-308 332-53 37-55 41-51 77 16 141-54 476-180 861-75 230-102 295-198 481-208 406-517 826-979 1333-181 199-320 298-635 456-711 356-1636 569-2722 626-221 11-528 11-704-1zm169-832c205-58 380-204 470-391 67-141 68-150 72-586 5-424-7-720-32-840-31-150-103-259-195-299l-49-21-1563 2-1563 3-57 23c-62 25-150 98-174 144-29 56-36 130-19 210 30 143 125 307 309 532 602 735 1130 1102 1737 1207 196 33 265 37 644 35 303-2 370-5 420-19zm2100-101c179-44 442-134 543-185 179-90 400-262 543-422 316-355 548-820 550-1104 1-97-12-149-50-202-39-53-80-82-153-104-57-18-110-19-986-19-911 0-926 0-968 20-51 25-88 77-117 162-21 62-21 79-25 757-3 738 2 888 38 983 28 75 81 124 147 134 26 4 57 11 68 15 11 5 76 7 145 5 98-4 155-12 265-40z" /><path d="m3148 3579c-704-68-1305-547-1528-1217-64-193-81-291-87-512-9-326 39-556 172-836 226-471 668-831 1176-958 917-230 1850 283 2144 1179 98 296 116 613 54 919-180 893-1021 1513-1931 1425zm402-969c41-12 113-41 160-65 168-88 288-211 370-380 59-123 80-200 87-330 23-423-282-803-704-876-38-7-117-10-187-7-105 4-135 10-223 40-223 76-383 215-488 423-65 130-87 222-88 375-2 220 60 387 207 564 109 129 312 244 488 276 89 15 292 5 378-20z" /><path d="m9880 3580c-948-99-1656-911-1617-1855 42-994 874-1763 1862-1722 383 16 740 147 1040 381 108 86 275 261 357 376 375 530 432 1228 148 1815-254 525-756 898-1330 990-120 19-349 26-460 15zm316-951c276-48 513-230 629-483 59-127 78-228 72-386-3-102-10-152-27-205-53-166-156-319-282-420-78-62-221-135-313-161-90-25-293-30-388-10-332 68-595 333-662 665-23 110-16 295 14 395 92 308 341 539 651 601 81 16 227 18 306 4z" /></g>
  </svg>`;

async function renderCar(data: CarWithId[]): Promise<void> {

  data.forEach(element => {
    const { name: carName, color: carColor, id: carId } = element;

    creatAddElementToPage('.cars__list', 'div', `cars__item cars__item-${carId}`);
    creatAddElementToPage(`.cars__item-${carId}`, 'div', `cars__inner cars__inner--info cars__inner--info`);
    creatAddElementToPage(`.cars__item-${carId} .cars__inner--info`, 'button', 'cars__button cars__button--select', 'select');
    creatAddElementToPage(`.cars__item-${carId} .cars__inner--info`, 'button', 'cars__button cars__button--remove', 'remove');
    creatAddElementToPage(`.cars__item-${carId} .cars__inner--info`, 'span', 'cars__spacer', '|');
    creatAddElementToPage(`.cars__item-${carId} .cars__inner--info`, 'h4', 'cars__model', carName);
    creatAddElementToPage(`.cars__item-${carId}`, 'div', `cars__inner cars__inner--game`);
    creatAddElementToPage(`.cars__item-${carId} .cars__inner--game`, 'div', `cars__button-wrapper cars__button-wrapper`);
    creatAddElementToPage(`.cars__item-${carId} .cars__button-wrapper`, 'button', 'cars__button cars__button--start', 'start');
    creatAddElementToPage(`.cars__item-${carId} .cars__button-wrapper`, 'button', 'cars__button cars__button--stop', 'stop');
    creatAddElementToPage(`.cars__item-${carId} .cars__inner--game`, 'div', `cars__car`);
    const carElement: HTMLElement | null = document.querySelector(`.cars__item-${carId} .cars__car`);
    if (!carElement) return;
    carElement.innerHTML = carImage;
    carElement.style.fill = carColor;
    creatAddElementToPage(`.cars__item-${carId} .cars__inner--game`, 'img', `cars__flag`);
    const flagElement: HTMLImageElement | null = document.querySelector(`.cars__item-${carId} .cars__flag`);
    if (!flagElement) return;
    flagElement.src = flagImage;
  });
}

export default renderCar;