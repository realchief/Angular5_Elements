import { Component } from "@angular/core";
import {AuthDataStorage} from "../common/auth-data.storage";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private authDataStorage: AuthDataStorage, private router: Router) {
  }

  logout() {
    this.authDataStorage.unsetToken();
    this.router.navigate(["/auth/login"]);
  }
}
