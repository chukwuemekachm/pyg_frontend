import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function SEO({ title }) {
  return (
    <Helmet>
      <title>{`${title} | PYG Tracker`}</title>
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};
