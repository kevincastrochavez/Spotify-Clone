export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQA1a6GVqT5eVHfZkdYm61KV1OjQjNdcSv_yGBajvPz09jYzELNiGa6h4nEz3BYMlhtFlJrNB4RYa1GG6oe7wNoU79k38vl3zGpz3WUSNMmCG0nj45957SvA1GrLcjRJNrQTpw500f24qM_Zqvnmnyf03DeJvg",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
