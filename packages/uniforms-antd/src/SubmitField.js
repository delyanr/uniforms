import Button from 'antd/lib/button';
import React from 'react';
import context from 'uniforms/context';
import {useContext} from 'react';

function SubmitField({inputRef, value, ...props}) {
  const {
    error,
    state: {disabled}
  } = useContext(context).uniforms;

  return (
    <Button disabled={!!(error || disabled)} htmlType="submit" ref={inputRef} type="primary" {...props}>
      {value}
    </Button>
  );
}

SubmitField.defaultProps = {value: 'Submit'};

export default SubmitField;
