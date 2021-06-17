import { CHANGE_FILTER } from '../actions/type';

const initialState = {
  category: 'ALL',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:

      return {
        category: action.value,
      };

    default:
      return state;
  }
}
