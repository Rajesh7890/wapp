import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';


export default function Input(props){
  const {
    label, type, name, containerStyle, labelStyle, style
  } = props;

  return (
    <div className={`input-field-container `} style={containerStyle}>
      {!isEmpty(label) && <label className="label" style={labelStyle}>{label}</label>}
      <input className={`input ${name}-field`} type={type} name={name} style={style} />
    </div>
  );
}

Input.propTypes = {
  label:          PropTypes.string,
  type:           PropTypes.string.isRequired,
  name:           PropTypes.string.isRequired,
  containerStyle: PropTypes.instanceOf(Object),
  labelStyle:     PropTypes.instanceOf(Object),
  style:          PropTypes.instanceOf(Object),
};

Input.defaultProps = {
  label:          '',
  containerStyle: {},
  labelStyle:     {},
  style:          {},
};
