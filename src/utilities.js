export const transformClassesIntoArray = className => {
  if (className) {
    console.log(
      className.indexOf(' ') === -1 ? [className] : className.split(' ')
    );
    return className.indexOf(' ') === -1 ? [className] : className.split(' ');
  } else {
    return false;
  }
};

export const mergeClasses = ({ defaultClasses, extraClasses }) => {
  const defaultClassesList = transformClassesIntoArray(defaultClasses);
  const extraClassesList = transformClassesIntoArray(extraClasses);

  return [...defaultClassesList, ...extraClassesList].join(' ');
};
