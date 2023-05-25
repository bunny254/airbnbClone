//Importing all components
import SignIn from "./siteComponents/signIn";

//React-router-dom
import { Route,Routes } from "react-router-dom";
import Layout from "./layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/signin" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
