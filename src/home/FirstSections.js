import React from 'react';

import Warning from './Warning';

const WARNINGS = [
  {
    text: 'Автомобиль является источником повышенной опасности.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
  {
    text: 'Незнание законов не освобождает от ответственности.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
  {
    text: 'От моих знаний зависит жизни меня и окружающих.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
];

const FirstSections = () => {
  const warnings = WARNINGS.map((warning, index) => (
    <div className='column'>
      <Warning key={index} {...warning} />
    </div>
  ));
  return (
    <section className='hero is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
          <div className='block'>
            <div className='columns'>
              <div className='column'>
                <h1 className='title has-text-centered pb-5 mb-5'>
                  Did you know that...
                </h1>
              </div>
            </div>
          </div>
          <div className='block'>
            <div className='columns'>{warnings}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSections;
