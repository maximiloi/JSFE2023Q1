import './sources.css';
import { UNewsCompany } from '../../../types/index';

class Sources {
  public draw = (data: UNewsCompany[]): void => {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
    if (!sourceItemTemp) throw new Error('Source item template not found!');

    data.forEach((item: UNewsCompany): void => {
      const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

      const sourceItemNameEL: Element | null = sourceClone.querySelector('.source__item-name');
      if (sourceItemNameEL instanceof HTMLElement) {
        sourceItemNameEL.textContent = item.name;
      }

      const sourceItemEL: Element | null = sourceClone.querySelector('.source__item');
      if (sourceItemEL instanceof HTMLElement) {
        sourceItemEL.setAttribute('data-source-id', item.id);
      }

      fragment.append(sourceClone);
    });

    const sourceEL: Element | null = document.querySelector('.sources');
    if (sourceEL instanceof HTMLElement) {
      sourceEL.append(fragment);
    }
  };
}

export default Sources;
