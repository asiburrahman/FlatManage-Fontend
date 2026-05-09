import React from 'react';
import styles from './Button.module.css';

/**
 * Reusable Button component
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'} props.variant - The visual style of the button
 * @param {'sm' | 'md' | 'lg'} props.size - The size of the button
 * @param {boolean} props.loading - Whether the button is in a loading state
 * @param {React.ReactNode} props.icon - Optional icon to display
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.btn,
    styles[variant],
    styles[size],
    loading ? styles.loading : '',
    className
  ].join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
