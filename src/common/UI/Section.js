import React from 'react';
import withMergeClasses from '../hoc/withMergeClasses';

const Section = props => {
  return (
    <section {...props}>
      <div className='container'>{props.children}</div>
    </section>
  );
};

export default withMergeClasses(Section, 'section');
