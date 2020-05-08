import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../action/techAction';

const Techs = () => {
  const tech = useSelector((state) => state.tech);
  const dispatch = useDispatch();

  const { techs, loading } = tech;

  useEffect(() => {
    dispatch(getTechs());

    //eslint-disable-next-line
  }, []);
  console.log('Testing ...', techs);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List </h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech._id} />)}
        </ul>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect waves-blue waves-light btn'
        >
          Close
        </a>
      </div>
    </div>
  );
};

Techs.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => ({
//   tech: state.tech,
// });

export default Techs;
