export const transformClassesIntoArray = className => {
  if (className) {
    return className.indexOf(' ') === -1 ? [className] : className.split(' ');
  } else {
    return false;
  }
};

export const mergeClasses = ({ defaultClasses, extraClasses }) => {
  const defaultClassesList = transformClassesIntoArray(defaultClasses);
  const extraClassesList = transformClassesIntoArray(extraClasses);

  if (defaultClassesList && extraClassesList) {
    return [...defaultClassesList, ...extraClassesList].join(' ');
  } else if (defaultClassesList) {
    return defaultClassesList.join(' ');
  } else if (extraClassesList) {
    return extraClassesList.join(' ');
  }
};
