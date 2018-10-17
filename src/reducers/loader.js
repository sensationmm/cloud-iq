import {
  GET_DATA_BEGIN,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS
} from '../config/constants';

const initialState = {
  isLoading: false
};

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_BEGIN:
      return {
        ...initialState,
        isLoading: true,
      };

    case GET_DATA_SUCCESS:
    case GET_DATA_ERROR:
      return initialState;

    default:
      return state;
  }
};
