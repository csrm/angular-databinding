import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = false;
  serverName = 'server3';
  servers = ['testServer1', 'testServer2'];
  constructor() {
     setTimeout(() => {
      this.allowNewServer = true;
     },2000)
  }
  getAllowNewServer() {
    return this.allowNewServer;
  }
  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = true;
    setTimeout(() => {
     this.serverCreationStatus = false;
    }, 5000)
  }
}
