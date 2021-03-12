import React from 'react';
import withMergeClasses from '../../hoc/withMergeClasses';

const Paragraph = props => {
  return (
    <div className='columns is-mobile is-justify-content-center'>
      <div className='column is-10-tablet is-9-desktop'>
        <p {...props}>{props.children}</p>
      </div>
    </div>
  );
};

export default withMergeClasses(Paragraph, '');
