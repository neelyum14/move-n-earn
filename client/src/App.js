// import React from "react";
// import "./App.css";
// import { Container } from "semantic-ui-react";
// import ToDoList from "./To-Do-List";

// function App() {
//   return (
//     <div>
//       <Container>
//         <ToDoList />
//       </Container>
//     </div>
//   );
// }

// export default App;






import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import React,{useState} from "react";
import HomePage from './Pages/Home';
import LoginPopUpPage from './Pages/LoginPopUp';
import SignUpPage from './Pages/SignUpPage';


function App() {
  const [logindetail,setLoginDetails]=useState(null);
  return (
    <Router>
  <div>
    <Switch>

    <Route path='/' exact={true}>
      <HomePage logindetail={logindetail} setLoginDetails={setLoginDetails}/>
    </Route>

    <Route path='/LoginPagePopUp'>
      <LoginPopUpPage logindetail={logindetail} setLoginDetails={setLoginDetails}/>
    </Route>

    <Route path='/SignUpPage'>
      <SignUpPage logindetail={logindetail} setLoginDetails={setLoginDetails}/>
      </Route>
    </Switch>
  </div>
  </Router>


  );
}

export default App;





