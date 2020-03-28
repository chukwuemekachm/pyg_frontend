import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const modalRoot = document.getElementById('__MODAL__');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    modalRoot.setAttribute('tabindex', 0);
    modalRoot.focus();
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children, isModalOpen } = this.props;

    return isModalOpen && createPortal(
      children,
      this.el,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ modal }) => ({
  isModalOpen: modal.status.isOpen,
});

export default connect(mapStateToProps, null)(Modal);
