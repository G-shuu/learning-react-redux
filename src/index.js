// import React from "react";
// import { render } from "react-dom";

// var reactElement = <h2>こんにちは世界</h2>;

// console.log(reactElement);

// render(reactElement, document.getElementById("root"));

// import React from "react";
// import { render } from "react-dom";

// const returnReactElement = () => {
//   return <h2>text</h2>;
// };

// const returnReactElement2 = () => <h2>text</h2>;

// const returnReactElement3 = hello => <h2>{hello}</h2>;

// const returnReactElement4 = (no, name) => {
//   const newStrings = `${no}番目は${name}さんです。`;
//   return <h2>{newStrings}</h2>;
// };

// render(returnReactElement4("1", "kuzu"), document.getElementById("root"));

// import React from "react";
// import { render } from "react-dom";

// const returnReactElement = () => {
//   return <h2>name</h2>;
// };

// const ReturnReactElement = props => {
//   return (
//     <h2>
//       {props.name} {props.music}
//     </h2>
//   );
// };

// const ReturnReactElement2 = ({ name, music }) => {
//   return (
//     <h2>
//       {name} {music}
//     </h2>
//   );
// };

// render(
//   <ReturnReactElement name="Great" music="jazz" />,
//   document.getElementById("root")
// );

// import React from "react";
// import { render } from "react-dom";

// import { var1, function1, ReactComponent } from "./module";

// console.log(var1);
// function1();

// render(<ReactComponent />, document.getElementById("root"));

// import React from "react";
// import { render } from "react-dom";

// import ClassComponent1 from "./ClassComponent1";
// import ClassComponent2 from "./ClassComponent2";
// import { ClassComponent3 } from "./ClassComponent3";

// render(
//   <div>
//     <ClassComponent1 />
//     <ClassComponent2 />
//     <ClassComponent3 />
//   </div>,
//   document.getElementById("root")
// );

// import React from "react";
// import { render } from "react-dom";

// import { ReactComponent } from "./ReactComponent";

// render(
//   <ReactComponent name="Michael" music="Bad" />,
//   document.getElementById("root")
// );

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   callMyProfile() {
//     console.log(this.name, this.age);
//   }
// }

// const Nakanishi = new Human("Nakanishi", 30);

// const Tanaka = new Human("Tanaka", 30);

// Nakanishi.callMyProfile();
// Tanaka.callMyProfile();

// import React from "react";
// import { render } from "react-dom";

// class Human extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "Nakanishi" };
//   }

//   render() {
//     return (
//       <h2>
//         {this.state.name} {this.props.age}
//       </h2>
//     );
//   }
// }

//render(<Human age="40" />, document.getElementById("root"));

// import React from "react";
// import { render } from "react-dom";

// class Human extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "Nakanishi" };
//   }

//   render() {
//     return (
//       <h2 onClick={this.onButtonClick}>
//         {this.state.name} {this.props.age}
//       </h2>
//     );
//   }

//   onButtonClick = () => {
//     this.setState({ name: this.state.name + "san" });
//   };
// }

// render(<Human age="30" />, document.getElementById("root"));

// import React from "react";
// import { render } from "react-dom";

// const todos = [
//   { id: 1, title: "title1" },
//   { id: 2, title: "title2" },
//   { id: 3, title: "title3" },
//   { id: 4, title: "title4" }
// ];

// const deleteTargetId = 3;

// const deletedArray = todos.filter(todo => todo.id !== deleteTargetId);

// console.log(deletedArray);

// import React from "react";
// import { render } from "react-dom";

// const todos = [
//   { id: 1, title: "title1" },
//   { id: 2, title: "title2" },
//   { id: 3, title: "title3" },
//   { id: 4, title: "title4" }
// ];

// const deletedTargetId = 3;

// const deletedArray = todos.map(todo => todo.id !== deletedTargetId);

// console.log(deletedArray);

// const Todos = ({ todos }) => {
//   const list = todos.map(todo => {
//     return (
//       <li>
//         {todo.id} {todo.title}
//       </li>
//     );
//   });

//   return <ul>{list}</ul>;
// };

// render(<Todos todos={todos} />, document.getElementById("root"));

//

// import React from "react";
// import { render } from "react-dom";

// import { TodoApp } from "./TodoApp";

// render(<TodoApp />, document.getElementById("root"));

// import React from "react";
// import { render } from "react-dom";

// import axios from "axios";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { member: [] };
//   }

//   memberList(list) {
//     const memberList = list.map((member, index) => {
//       return (
//         <li>
//           {member.name} {member.age}
//         </li>
//       );
//     });

//     return <ul>{memberList}</ul>;
//   }

//   render() {
//     console.log(this.state.member);
//     return (
//       <div>
//         <button onClick={this.getJson}>Get Json</button>
//         {this.memberList(this.state.member)}
//       </div>
//     );
//   }

//   getJson = () => {
//     const url = "https://api.myjson.com/bins/7lh8o";

//     axios.get(url).then(res => {
//       this.setState(res.data);
//     });
//   };
// }

// render(<App />, document.getElementById("root"));
// import axios from "axios";
// const search = "cat";
// const key = "4y3NEMf7aEo8BCTA7qT3xkovwfN3NYNC";
// const limit = 3;

// const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

// axios.get(url).then(res => {
//   console.log(res.data);
//   const data = res.data.data;

//   const imageUrl = data[0].images.downsized.url;
//   console.log(imageUrl);

//   const img = document.createElement("img");
//   img.src = imageUrl;
//   document.body.appendChild(img);
// });

// import React from "react";
// import { render } from "react-dom";

// import axios from "axios";
// import { Search } from "./components/Search";
// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { gifUrlList: [] };
//   }

//   renderImageList(list) {
//     const imageList = list.map(url => {
//       return (
//         <li className="item">
//           <img className="image" src={url} />
//         </li>
//       );
//     });

//     return <ul className="list">{imageList}</ul>;
//   }

//   render() {
//     return (
//       <div>
//         <Search search={this.giphyApi} />
//         {this.renderImageList(this.state.gifUrlList)}
//       </div>
//     );
//   }

//   giphyApi = target => {
//     const search = target;
//     const key = "4y3NEMf7aEo8BCTA7qT3xkovwfN3NYNC";
//     const limit = 50;
//     const url = `https://api.giphy.com/v1/gifs/search?q=${search}/&api_key=${key}&limit=${limit}`;

//     axios.get(url).then(res => {
//       const data = res.data.data;
//       const imageUrlList = data.map(item => item.images.downsized.url);
//       this.setState({ gifUrlList: imageUrlList });
//     });
//   };
// }

// render(<App />, document.getElementById("root"));

// import { createStore } from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "PLUS", payload: { num: 1 } });
// store.dispatch({ type: "PLUS", payload: { num: 10 } });

// store.dispatch({ type: "MINUS", payload: { num: 1 } });
// store.dispatch({ type: "MINUS", payload: { num: 10 } });

import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import reducer from "./reducers";

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import App from "./containers/App";

const store = createStore(rootReducer);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
