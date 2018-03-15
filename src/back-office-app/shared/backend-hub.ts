import { Injectable } from "@angular/core";
import { HubConnection } from "@aspnet/signalr-client";
import { Router } from "@angular/router";
import { TOKEN_STORAGE_KEY } from "./api.service";
import { environment } from "../../environments/environment";

@Injectable()
export class BackendHub {
  private hub: HubConnection;

  constructor(private router: Router) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!token) {
      this.router.navigate(["/login"]);
      return;
    }
    const url = `${environment.backendEndpoint}/${environment.marketDataHub}?tokenFromSignalR=${token}`;
    this.hub = new HubConnection(url);

    this.hub.on("authError", () => {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      this.router.navigate(["/login"]);
    });
    this.hub.onclose(e => {
      alert("Disconnected from server, logging out...");
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      this.router.navigate(["/login"]);
    });
    this.hub.start();
  }
}
