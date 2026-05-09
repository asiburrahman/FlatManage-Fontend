import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, className = '', variant = 'default' }) => {
  const cardClasses = [
    styles.card,
    variant === 'glass' ? styles.glass : '',
    variant === 'flat' ? styles.flat : '',
    className
  ].join(' ');

  return <div className={cardClasses}>{children}</div>;
};

const Header = ({ children, className = '' }) => (
  <div className={`${styles.header} ${className}`}>{children}</div>
);

const Body = ({ children, className = '' }) => (
  <div className={`${styles.body} ${className}`}>{children}</div>
);

const Footer = ({ children, className = '' }) => (
  <div className={`${styles.footer} ${className}`}>{children}</div>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
