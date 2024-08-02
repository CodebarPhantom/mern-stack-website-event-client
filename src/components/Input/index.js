import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {{ 
*   type: string, 
*   value: string, 
*   name: string, 
*   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
* }} props
*/

export default function Input({ type, value, name, handleChange }) {
  return <input type={type} name={name} value={value} onChange={handleChange} />;
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// Optional: Define default values for props
Input.defaultProps = {
  type: 'text',
  value: '',
  name: 'name',
  handleChange: () => {},
};
