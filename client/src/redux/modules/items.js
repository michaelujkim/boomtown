//actions

const GET_ITEMS_LOADING = "GET_ITEMS_LOADING";
const GET_ITEMS = "GET_ITEMS";
const GET_ITEMS_ERROR = "GET_ITEMS_ERROR";
const ITEMS_URL = "http://localhost:4000/items";
const USERS_URL = "http://localhost:4000/users";
//action creators
const getItemsLoading = () => ({
  type: GET_ITEMS_LOADING
});

const getItems = items => ({
  type: GET_ITEMS,
  payload: items
});

const getItemsError = error => ({
  type: GET_ITEMS_ERROR,
  payload: error
});
//async action creator
const items = fetch(ITEMS_URL).then(r => r.json());
const users = fetch(USERS_URL).then(r => r.json());
export const fetchItemsAndUsers = () => dispatch => {
  dispatch(getItemsLoading());
  return Promise.all([items, users])
    .then(response => {
      const [itemsList, usersList] = response;

      const combined = itemsList.map(item => {
        const { fullname, email } = usersList.find(
          user => user.id === item.itemowner
        );
        item.itemowner = { fullname, email };

        return item;
      });
      dispatch(getItems(combined));
    })
    .catch(error => dispatch(getItemsError(error)));
};
//reducer

export default (
  state = {
    isLoading: false,
    items: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_ITEMS_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_ITEMS: {
      return { ...state, isLoading: false, items: action.payload, error: "" };
    }
    case GET_ITEMS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
