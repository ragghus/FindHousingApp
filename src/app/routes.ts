import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { HousingDetails } from "./housing-details/housing-details";

const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: "Home Page",
    },
    {
        path: 'details/:id',
        component: HousingDetails,
        title:'Housing Details',
    },
];

export default routeConfig;