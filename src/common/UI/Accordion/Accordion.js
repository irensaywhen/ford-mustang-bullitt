import React from 'react';

import AccordionItem from './AccordionItem';

const Accordion = props => {
  const accordionItems = props.items.map((item, index) => (
    <AccordionItem key={index} {...item} />
  ));

  return <div className='Accordion'>{accordionItems}</div>;
};

export default Accordion;
