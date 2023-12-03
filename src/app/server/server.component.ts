import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 1;
  serverStatus: string = 'online';
  serverLocation: string = 'TBD';
  getServerStatus() {
   return this.serverStatus;
  }

  getServerLocation() {
  return this.serverLocation;
  }

}
