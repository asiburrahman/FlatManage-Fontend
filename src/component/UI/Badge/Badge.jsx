import React from 'react';
import styles from './Badge.module.css';

const Badge = ({
  children,
  variant = 'neutral',
  outline = false,
  className = ''
}) => {
  const badgeClasses = [
    styles.badge,
    styles[variant],
    outline ? styles.outline : '',
    className
  ].join(' ');

  return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
