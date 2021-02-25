export const transformClassesIntoArray = className => {
  if (className) {
    return className.indexOf(' ') === -1 ? [className] : className.split(' ');
  } else {
    return false;
  }
};
