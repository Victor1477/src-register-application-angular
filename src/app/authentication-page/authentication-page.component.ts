import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import axios from "axios";
import { LoadingSpinnerComponent } from "../components/loading-spinner/loading-spinner.component";

@Component({
  selector: "app-authentication-page",
  standalone: true,
  imports: [ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: "./authentication-page.component.html",
  styleUrl: "./authentication-page.component.scss",
})
export class AuthenticationPageComponent {
  protected isLoading: boolean = false;

  protected form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    axios
      .post("/login", this.form.value)
      .then((response) => {
        this.router.navigateByUrl("/contacts/list");
      })
      .catch(() => {})
      .finally(() => {
        this.isLoading = false;
      });
  }

  onChange(event: any) {
    if (event.target.value !== "") {
      event.target.parentNode.classList.add("active");
    } else {
      event.target.parentNode.classList.remove("active");
    }
  }
}
