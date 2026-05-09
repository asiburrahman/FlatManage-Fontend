import React from 'react';
import styles from './Input.module.css';

/**
 * Reusable Input component
 * @param {Object} props
 * @param {string} props.label - Input label
 * @param {string} props.error - Error message
 * @param {React.ReactNode} props.icon - Optional icon to display inside the input
 * @param {string} props.className - Additional CSS classes for the container
 */
const Input = ({
  label,
  error,
  icon,
  className = '',
  id,
  ...props
}) => {
  const containerClasses = [styles.inputContainer, className].join(' ');
  const inputClasses = [
    styles.input,
    icon ? styles.hasIcon : '',
    error ? styles.errorBorder : ''
  ].join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          id={id}
          className={inputClasses}
          {...props}
        />
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
