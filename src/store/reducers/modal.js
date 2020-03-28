import { LOGOUT_USER } from 'Store/actions/user';
import { OPEN_MODAL, CLOSE_MODAL } from 'Store/actions/modal';

const initialState = {
  status: {
    isOpen: false,
  },
  openModalId: '',
  props: {},
};

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGOUT_USER:
      return {
        ...initialState,
      };

    case OPEN_MODAL:
      return {
        ...state,
        status: {
          ...state.status,
          isOpen: true,
        },
        openModalId: payload.modalId,
        props: payload.props,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        status: {
          ...state.status,
          isOpen: false,
        },
        openModalId: '',
        props: {},
      };

    default:
      return state;
  }
}
