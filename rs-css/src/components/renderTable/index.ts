import './index.scss';

import createElement from '../../utils/createElement';

function renderTable(LevelCode: string): void {
  const codeArr: string[] = LevelCode
    .trim()
    .replaceAll('\n', '')
    .split('    ')
    .filter((elem): boolean => !elem.startsWith('</'));

  const tableSurfaceElem: Element | null = document.querySelector('.table__area');
  if (!tableSurfaceElem) return;
  tableSurfaceElem.innerHTML = '';

  codeArr.forEach((elem): void => {
    switch (true) {
      case elem.includes('id') && !elem.includes('  '):
        {
          const elemTemp: string[] = elem.replaceAll('<', '').replaceAll('/>', '').replaceAll('>', '')
            .replaceAll('id="', '').replaceAll('"', '').split(' ');
          const [tagName, id] = elemTemp;
          const elemHTML: HTMLElement = createElement(tagName);
          elemHTML.id = id;
          tableSurfaceElem.append(elemHTML);
        }
        break;

      case elem.includes('class') && !elem.includes('  '):

        {
          const elemTemp: string[] = elem.replaceAll('<', '').replaceAll('/>', '').replaceAll('>', '')
            .replaceAll('class="', '').replaceAll('"', '').split(' ');
          const [tagName, className] = elemTemp;
          const elemHTML: HTMLElement = createElement(tagName);
          elemHTML.classList.add(className);
          tableSurfaceElem.append(elemHTML);
        }
        break;

      case elem.includes('  ') && !elem.includes('class'):
        {
          const tableArea: Element | null = document.querySelector('.table__area');
          if (tableArea) {
            const lastChild: Element | null = tableArea.lastElementChild;
            if (lastChild) {
              const elemTemp: string = elem.replaceAll('<', '').replaceAll('/>', '').replaceAll('>', '').trim();
              const elemHTML: HTMLElement = createElement(elemTemp);
              lastChild.append(elemHTML);
            }
          }
        }
        break;

      case elem.includes('  ') && elem.includes('class'):
        {
          const tableArea: Element | null = document.querySelector('.table__area');
          if (tableArea) {
            const lastChild: Element | null = tableArea.lastElementChild;
            if (lastChild) {
              const elemTemp: string[] = elem.replaceAll('<', '').replaceAll('/>', '').replaceAll('>', '')
                .replaceAll('class="', '').replaceAll('"', '').trim().split(' ');
              const [tagName, className] = elemTemp;
              const elemHTML: HTMLElement = createElement(tagName);
              elemHTML.classList.add(className);
              lastChild.append(elemHTML);
            }
          }
        }
        break;

      default:
        {
          const elemTemp: string = elem.replaceAll('<', '').replaceAll('/>', '').replaceAll('>', '');
          const elemHTML: HTMLElement = createElement(`${elemTemp}`);
          tableSurfaceElem.append(elemHTML);
        }
        break;
    }
  })
}

export default renderTable;