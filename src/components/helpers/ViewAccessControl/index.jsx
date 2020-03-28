import PropTypes from 'prop-types';

export default function ViewAccessControl(props) {
  const { children, userRole, allowedRoles } = props;

  return allowedRoles.includes(userRole) ? children : null;
}

ViewAccessControl.propTypes = {
  userRole: PropTypes.string.isRequired,
  allowedRoles: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  children: PropTypes.node.isRequired,
};
