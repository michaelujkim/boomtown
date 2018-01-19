//actions

const GET_PROFILE_LOADING = "GET_USER_LOADING";
const GET_PROFILE = "GET_USER";
const GET_PROFILE_ERROR = "GET_USER_ERROR";
const ITEMS_URL = "http://localhost:4000/items";
const USERS_URL = "http://localhost:4000/users";
//action creators
const getProfileLoading = () => ({
  type: GET_PROFILE_LOADING
});

const getProfile = items => ({
  type: GET_PROFILE,
  payload: items
});

const getProfileError = error => ({
  type: GET_PROFILE_ERROR,
  payload: error
});
//async action creator
const items = fetch(ITEMS_URL).then(r => r.json());
const users = fetch(USERS_URL).then(r => r.json());
export const fetchUsers = userid => dispatch => {
  dispatch(getProfileLoading());
  return Promise.all(
    [`http://localhost:4000/items/?itemowner=${userid}`, USERS_URL].map(url =>
      fetch(url).then(response => response.json())
    )
  )
    .then(response => {
      const [itemsList, usersList] = response;

      const combined = itemsList.map(item => {
        item.itemowner = usersList.find(user => user.id === item.itemowner);
        item.borrower
          ? (item.borrower = usersList.find(user => user.id === item.borrower))
          : "error";
        // if (item.borrower) {
        //   item.borrower.map(borrower => {
        //     const { bio } = usersList.find(user => user.id === item.borrower);
        //     item.borrower = { bio };
        //   });
        // }

        // const { fullname, email } = usersList.find(
        //   user => user.id === item.itemowner
        // );
        // item.itemowner = { fullname, email };

        return item;
      });
      // .map(item => {
      //   const { bio } = usersList.find(user => user.id === item.borrower);
      //   item.borrower = { bio };
      //   return item;
      // })
      dispatch(getProfile(combined));
    })
    .catch(error => dispatch(getProfileError(error)));
};
//reducer

export default (
  state = {
    isLoading: false,
    user: [],
    error: "",
    items: []
  },
  action
) => {
  switch (action.type) {
    case GET_PROFILE_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_PROFILE: {
      return { ...state, isLoading: false, items: action.payload, error: "" };
    }
    case GET_PROFILE_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
