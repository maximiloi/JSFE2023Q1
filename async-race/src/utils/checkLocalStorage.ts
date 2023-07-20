function checkLocalStorage(): string {
  let currentLevel: string | null = '';

  if (localStorage.getItem('garage-page')) {
    currentLevel = localStorage.getItem('garage-page');
  } else {
    localStorage.setItem('garage-page', '1');
    currentLevel = '1';
  }

  return currentLevel!;
}

export default checkLocalStorage;