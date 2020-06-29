import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const NumericInput = ({ title, label }) => {
  return (
    <Fragment>
      <div className="vf-row">
        <div style={{ margin: '0' }} className="vf-col">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="vf-row">
        <Column title={'Default'}>
          <div className="vf-input-container">
            <input type="number" id="vf_number_input" className={`vf-input ${styles.fullWidth}`}></input>
            <label for="vf_number_input">Number Label</label>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className="vf-input-container">
            <input
              type="number"
              id="vf_number_input"
              className={`vf-input ${styles.fullWidth} ${styles.standardHover}`}
            ></input>
            <label for="vf_number_input">Number Label</label>
          </div>
        </Column>
        <Column title={'Focus with suggestion'}>
          <div className="vf-input-container">
            <input
              type="number"
              id="vf_number_input"
              className={`vf-input vf-input--data ${styles.fullWidth}`}
              defaultValue="1"
            ></input>
            <label for="vf_number_input">Number Label</label>
          </div>
        </Column>
        <Column title={'Filled'}>
          <div className="vf-input-container">
            <input
              type="number"
              id="vf_number_input"
              className={`vf-input vf-input--error vf-input--data ${styles.fullWidth}`}
              defaultValue="1"
            ></input>
            <label for="vf_number_input">Number Label</label>
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default NumericInput;
