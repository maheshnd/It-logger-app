import React, { useState, useEffect } from 'react';
import TechSelectOptions from '../tech/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { clearCurrent, updateLog } from '../../action/logAction';

const EditLogModal = ({ log: { current }, clearCurrent, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  console.log('Testing current', current);

  useEffect(() => {
    if (current) {
      setAttention(current.attention);
      setMessage(current.message);
      setTech(current.tech);
    }

    console.log('Testing current use', current);
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const updateNewLog = {
        message,
        attention,
        tech,
        date: new Date(),
        id: current.id,
      };

      updateLog(updateNewLog);
      clearCurrent();
      setAttention('');
      setMessage('');
      setTech('');

      M.toast({ html: `Log successfully updated by ${tech}` });
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={{ modalStyle }}>
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
          Update
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

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { clearCurrent, updateLog })(
  EditLogModal
);
