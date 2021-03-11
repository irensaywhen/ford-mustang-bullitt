import React from 'react';
import withMergeClasses from '../../hoc/withMergeClasses';
// import { mergeClasses } from '../../../utilities';
//
// const H2 = props => {
//   const classes = mergeClasses({
//     defaultClasses: 'title is-3',
//     extraClasses: props.className,
//   });
//
//   return (
//     <h2 {...props} className={classes}>
//       {props.children}
//     </h2>
//   );
// };

const H2 = props => {
  console.log(props);
  return <h2 {...props}>{props.children}</h2>;
};

export default withMergeClasses(H2, 'title is-3');
