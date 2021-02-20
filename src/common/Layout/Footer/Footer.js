import React from 'react';
import classes from '../../../assets/scss/layout/footer.module.scss';

const Footer = () => {
  const footerClasses = ['footer', classes.Footer];
  return (
    <footer className={footerClasses.join(' ')}>
      <div className='container'>
        <div className='columns is-justify-content-center'>
          <div className='col'>
            <p className='is-size-6'>
              <strong>Ford Mustang Bullitt</strong> wiki by{' '}
              <a href='https://irensays.blog/'>IrenSayWhen</a>
            </p>
          </div>
        </div>
        <div className='columns is-justify-content-center'>
          <div className='col'>
            <p className='is-size-6'>
              <i class='far fa-copyright'></i> all rights reserved
            </p>
          </div>
        </div>
        <div className='columns is-justify-content-center'>
          <div className='col px-1'>
            <a href='https://twitter.com/IrenSayWhen'>
              <i class='fab fa-twitter'></i>
            </a>
          </div>
          <div className='col px-1'>
            <a href='https://vk.com/irensaywhen'>
              <i class='fab fa-vk'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
