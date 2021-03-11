import React from 'react';

const transformClassesIntoArray = className => {
  if (className) {
    console.log(
      className.indexOf(' ') === -1 ? [className] : className.split(' ')
    );
    return className.indexOf(' ') === -1 ? [className] : className.split(' ');
  } else {
    return false;
  }
};

const mergeClasses = ({ defaultClasses, extraClasses }) => {
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

const withMergeClasses = (Component, defaultClasses) => {
  // const classes = mergeClasses()
  return props => {
    const classes = mergeClasses({
      defaultClasses,
      extraClasses: props.className,
    });

    return <Component {...props} className={classes} />;
  };
};

export default withMergeClasses;
