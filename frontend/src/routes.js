import Dashboard from "./containers/agencies-pages/dashboard";
import ProfileAgency from "./containers/agencies-pages/profile_agency";

const { default: AddOffer } = require("./containers/agencies-pages/addOffer");

const routesAgency = [
    // { id: "dashboard", name: "Dashboard", icon: "nc-icon nc-bank", component: Dashboard },
    { id: "Dashboard", name: "Dashboard", icon: "now-ui-icons tech_tv", component: Dashboard },
    { id: "AddOffer", name: "Add an Offer", icon: "now-ui-icons ui-1_simple-add", component: AddOffer },
    { id:"Profile", name: "Profile Agency", icon:"", component: ProfileAgency},
]

export default routesAgency