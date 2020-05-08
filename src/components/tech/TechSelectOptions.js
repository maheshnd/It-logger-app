import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../action/techAction';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();

    //eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option value={`${t.firstName} ${t.lastName}`} kay={t.id}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
