function renderLineCount(): string {
  const LINE_COUNT = 18;
  let numberEditor = '';
  for (let i = 1; i <= LINE_COUNT; i += 1) {
    numberEditor += `${i}<br>`;
  }
  return numberEditor;
}

export default renderLineCount;