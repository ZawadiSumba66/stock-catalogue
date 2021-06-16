import { CHANGE_FILTER } from './type';

export default function filterStock(value) {
  return {
    type: CHANGE_FILTER,
    value,
  };
}
