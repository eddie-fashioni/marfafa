import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader.js";
import NavBar from "./components/NavBar/NavBar.js";
import Dashboard from "./pages/Dashboard/Dashboard";
import Campaigns from "./pages/Campaigns/Campaigns";
import CampaignDetails from "./pages/CampaignDetails/CampaignDetails";

document.title = "marfarfa";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/campaigns" component={Campaigns} />
          <Route path="/campaigndetails" component={CampaignDetails} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
