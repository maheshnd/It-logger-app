import React, { useState } from 'react';
import TechSelectOptions from '../tech/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLogs } from '../../action/logAction';

const AddLogModal = ({ addLogs }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const newLogs = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLogs(newLogs);
      setAttention('');
      setMessage('');
      setTech('');

      M.toast({ html: `Log added by ${tech}` });
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={{ modalStyle }}>
      <div className='modal-content'>
        <h4>Enter system log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  id='indeterminate-checkbox'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='waves-effect blue waves-light btn'
        >
          Enter
        </a>{' '}
        <a
          href='#!'
          className='modal-close waves-effect waves-blue waves-light btn'
        >
          Cancel
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  hight: '75%',
};

export default connect(null, { addLogs })(AddLogModal);
