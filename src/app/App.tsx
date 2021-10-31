import { Global } from "@emotion/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./components/auth";
import { globalStyles } from "./styles";

const App = () => {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Route path="/" component={Login} />
    </Router>
  );
};

export default App;
