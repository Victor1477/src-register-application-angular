import { Component, Input } from "@angular/core";

@Component({
  selector: "loading-spinner",
  standalone: true,
  imports: [],
  templateUrl: "./loading-spinner.component.html",
  styleUrl: "./loading-spinner.component.scss",
})
export class LoadingSpinnerComponent {
  @Input() size: string = "1rem";
}
