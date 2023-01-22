import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'setstartdate':
      return updateObject(state, {
        startDate: action.date,
      });
    case 'addbooking':
      return updateObject(state, {
        availableTimes: [
          ...state.availableTimes,
          action.availableTimes,
        ],
      });

    default:
      return state;
  }
}
