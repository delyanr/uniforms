import Checkbox from 'antd/lib/checkbox';
import Radio from 'antd/lib/radio';
import React from 'react';
import SelectAntD from 'antd/lib/select';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

import wrapField from './wrapField';

const renderCheckboxes = props =>
  props.fieldType === Array ? (
    <Checkbox.Group
      disabled={props.disabled}
      id={props.id}
      name={props.name}
      onChange={value => props.onChange(value)}
      options={props.allowedValues.map(String)}
      value={props.value.map(String).map(props.transform || String)}
      {...filterDOMProps(props)}
    />
  ) : (
    <Radio.Group
      disabled={props.disabled}
      name={props.name}
      onChange={event => props.onChange(event.target.value)}
      value={props.value}
      {...filterDOMProps(props)}
    >
      {props.allowedValues.map(value => (
        <Radio
          key={value}
          value={value}
          style={{
            display: 'block',
            height: '30px',
            lineHeight: '30px'
          }}
        >
          {props.transform ? props.transform(value) : value}
        </Radio>
      ))}
    </Radio.Group>
  );
const renderSelect = props => (
  <SelectAntD
    allowClear={!props.required}
    disabled={props.disabled}
    id={props.id}
    mode={props.fieldType === Array ? 'multiple' : undefined}
    name={props.name}
    onChange={value => props.onChange(value)}
    placeholder={props.placeholder}
    ref={props.inputRef}
    value={
      props.fieldType === Array ? props.value || [] : '' + (props.value || '')
    }
    {...filterDOMProps(props)}
  >
    {props.allowedValues.map(value => (
      <SelectAntD.Option key={value} value={value}>
        {props.transform ? props.transform(value) : value}
      </SelectAntD.Option>
    ))}
  </SelectAntD>
);
const Select = ({ checkboxes, ...props }) =>
  wrapField(props, checkboxes ? renderCheckboxes(props) : renderSelect(props));
export default connectField(Select);
