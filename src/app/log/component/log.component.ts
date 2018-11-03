import { Component, OnInit } from '@angular/core';
import { SocketService, Socket } from 'src/app/services/sockets/sockets.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  username: string;
  messages = new Array<Socket>();

  ngOnInit() {
    this.username = 'ruofan';
    if (this.socketService != null && this.socketService.socket == null) {
        this.socketService.socket = new Socket();
    }
  }
  initSocketReceiver() {
    this.socketService.retrieveSocketPayload();
    this.updateResults(this.socketService.socket);
  }
  updateResults(socket: Socket) {
    this.messages.push(socket);
  }
  send(value: string) {
    this.socketService.socket.type = this.username;
    this.socketService.socket.payload = value;
    this.socketService.sendToHubSocket(this.socketService.socket);
    this.initSocketReceiver();

  }
  constructor( private socketService: SocketService ) {
    socketService.setupHubSocket('https://localhost:5001/', 'hub');
  }
}
