// import { combineReducers } from "redux";

// import number from "./number";
// import day from "./day";
// import title from "./title";

// export default combineReducers({
//   number,
//   day,
//   title
// });

import { combineReducers } from "redux";

import imageUrls from "./imageUrls";

import buttonText from "./buttonText";

export default combineReducers({ imageUrls, buttonText });
