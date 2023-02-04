// В этом файле будут функции, связанные с поиском, пока что я перенесла сюда и логику стилей поиска
// пока мне кажется самым разумным хранить ее здесь, хотя в процессе познания хуков предполагаю, что
// из этого файла данный функционал может быть перемещён в более подходящее место

export const addSelected = () => {
  const inputParent = document.getElementById('search');
  const svgIcon = document.getElementById('search-svg');
  inputParent?.classList.add('selected');
  svgIcon?.classList.add('selected');
};

export const removeSelected = () => {
  const inputParent = document.getElementById('search');
  const svgIcon = document.getElementById('search-svg');
  inputParent?.classList.remove('selected');
  svgIcon?.classList.remove('selected');
};
