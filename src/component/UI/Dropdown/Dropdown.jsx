import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({
  trigger,
  children,
  align = 'left',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.dropdown} ${isOpen ? styles.open : ''} ${className}`}
      ref={dropdownRef}
    >
      <div className={styles.trigger} onClick={toggleDropdown}>
        {trigger}
      </div>
      <div className={`${styles.menu} ${align === 'right' ? styles.alignRight : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Item = ({ children, onClick, className = '' }) => (
  <button
    className={`${styles.item} ${className}`}
    onClick={(e) => {
      if (onClick) onClick(e);
    }}
  >
    {children}
  </button>
);

const Divider = () => <div className={styles.divider} />;

Dropdown.Item = Item;
Dropdown.Divider = Divider;

export default Dropdown;
