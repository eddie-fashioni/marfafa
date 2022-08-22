import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader.js";
import NavBar from "./components/NavBar/NavBar.js";
import Dashboard from "./pages/Dashboard/Dashboard";
import Campaigns from "./pages/Campaigns/Campaigns";

document.title = "marfarfa";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageHeader />
        <Switch>
          {/* <Route path="/" exact component={Dashboard} />
          <Route path="/campaigns" component={Campaigns} /> */}
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
