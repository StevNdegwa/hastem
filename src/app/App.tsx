import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./components/auth";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Login} />
    </Router>
  );
};

export default App;
