import Storage from "../../utils/Storage";

function checkLocalStorage(): void {
  console.log('tokens: ', Storage.get('1'));
  //   if (Storage.get('css-dinner-current')) {
  //     console.log('Storage.get(css-dinner): ', Storage.get('css-dinner-current'));
  //   } else {
  //     Storage.set('css-dinner-current', '1');
  //   }
  //   console.log();
}

export default checkLocalStorage;

