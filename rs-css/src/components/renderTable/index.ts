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
      case elem.includes('id'):
        console.log('elem id: ', elem);
        {
          const elemTemp: string[] = elem.replaceAll('<', '').replaceAll('/>', '').replaceAll('>', '')
            .replaceAll('id="', '').replaceAll('"', '').split(' ');

          const [tagName, id] = elemTemp;
          const elemHTML: HTMLElement = createElement(tagName);
          elemHTML.id = id;
          tableSurfaceElem.append(elemHTML);
        }
        break;

      case elem.includes('class'):
        console.log('elem class: ', elem);
        {
          const elemTemp: string[] = elem.replaceAll('<', '').replaceAll('/>', '').replaceAll('>', '')
            .replaceAll('class="', '').replaceAll('"', '').split(' ');

          const [tagName, className] = elemTemp;
          const elemHTML: HTMLElement = createElement(tagName);
          elemHTML.classList.add(className);
          tableSurfaceElem.append(elemHTML);
        }
        break;

      case elem.includes('  '):
        console.log('elem space: ', elem);
        {
          const elemTemp: string = elem.replaceAll('<', '').replaceAll('/>', '')
          //   .replaceAll('id="', '').replaceAll('"', '').split(' ');

          // const [tagName, id] = elemTemp;
          // const elemHTML: HTMLElement = createElement(tagName);
          // elemHTML.id = id;
          // tableSurfaceElem.append(elemHTML);
          console.log('elemTemp: ', elemTemp);
        }
        break;

      default:
        console.log('elem default: ', elem);
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