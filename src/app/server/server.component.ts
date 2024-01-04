import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 1;
  serverStatus: string = '';
  serverLocation: string = '';
  constructor() {
   this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   this.serverLocation = Math.random() > 0.5 ? 'remote' : 'local';
   this.serverId = Math.round(Math.random() * 100);
  }
  getServerStatus() {
   return this.serverStatus;
  }

  getServerLocation() {
  return this.serverLocation;
  }

  getColor() {
   return this.serverStatus == 'online' ? 'green' : 'red';
  }

}
