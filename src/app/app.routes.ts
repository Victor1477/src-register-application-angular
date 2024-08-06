import { Routes } from "@angular/router";
import { AuthenticationPageComponent } from "./authentication-page/authentication-page.component";

export const routes: Routes = [
  { path: "authentication", component: AuthenticationPageComponent },
  { path: "**", redirectTo: "/authentication" },
];
