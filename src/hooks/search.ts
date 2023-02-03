// В этом файле будут функции, связанные с поиском, пока что я перенесла сюда и логику стилей поиска
// пока мне кажется самым разумным хранить ее здесь, хотя в процессе познания хуков предполагаю, что
// из этого файла данный функционал может быть переменщен в более подходящее место

const inputParent = document.getElementById('search');

export const addSelected = () => {
  inputParent?.classList.add('selected');
};

export const removeSelected = () => {
  inputParent?.classList.remove('selected');
};
