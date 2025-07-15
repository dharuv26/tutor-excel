// src/components/ui/Button.jsx

import React from 'react';
import './Button.css'; // Import the new CSS

/**
 * A highly reusable and themeable custom button component.
 *
 * @param {object} props The component props.
 * @param {'sm'|'md'|'lg'} [props.size='md'] The size of the button.
 * @param {React.ReactNode} props.children The content of the button (text, icons, etc.).
 * @param {string} [props.textColor='white'] The default text color.
 * @param {string} [props.backgroundColor='#0d6efd'] The default background color.
 * @param {string} [props.borderColor] The default border color. Defaults to backgroundColor.
 * @param {string} [props.clickBackgroundColor] The background color on click.
 * @param {string} [props.clickTextColor] The text color on click.
 * @param {string} [props.clickBorderColor] The border color on click.
 * @param {Function} [props.onClick] The click event handler.
 * @param {string} [props.className] Additional CSS classes.
 * @param {boolean} [props.disabled=false] Whether the button is disabled.
 * @param {'button'|'submit'|'reset'} [props.type='button'] The button's type attribute.
 */
const Button = ({
  size = 'md',
  children,
  textColor = 'white',
  backgroundColor = '#0d6efd',
  borderColor,
  clickBackgroundColor,
  clickTextColor,
  clickBorderColor,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  // Define CSS variables from props
  const buttonStyles = {
    '--bg-color': backgroundColor,
    '--text-color': textColor,
    '--border-color': borderColor || backgroundColor, // Use backgroundColor if borderColor is not provided
    '--click-bg-color': clickBackgroundColor,
    '--click-text-color': clickTextColor,
    '--click-border-color': clickBorderColor,
  };

  // Build the className string
  const classNames = `custom-btn ${size !== 'md' ? `btn-${size}` : ''} ${className}`;

  return (
    <button
      type={type}
      className={classNames}
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;