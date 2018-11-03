import { Component, OnInit } from '@angular/core';
import { SocketService, Socket } from 'src/app/services/sockets/sockets.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  divMessages: HTMLDivElement;
  tbMessage: HTMLInputElement;
  btnSend: HTMLButtonElement;
  username: number;

  ngOnInit() {
    this.divMessages = document.querySelector('#divMessages');
    this.tbMessage = document.querySelector('#tbMessage');
    this.btnSend = document.querySelector('#btnSend');
    this.username = new Date().getTime();
    if (this.socketService != null && this.socketService.socket == null) {
        this.socketService.socket = new Socket();
    }
  }
  initSocketReceiver() {
    this.socketService.retrieveSocketPayload();
    this.updateResults(this.socketService.socket);
  }
  updateResults(socket: Socket) {
    console.log(socket);
    const messageContainer = document.createElement('div');
    messageContainer.innerHTML =
        `<div class='message-author'>${socket.type}</div><div>${socket.payload}</div>`;

    this.divMessages.appendChild(messageContainer);
    this.divMessages.scrollTop = this.divMessages.scrollHeight;
  }
  send() {
    this.socketService.socket.type = this.username;
    this.socketService.socket.payload = this.tbMessage.value;
    this.socketService.sendToHubSocket(this.socketService.socket);
    this.initSocketReceiver();

  }
  constructor( private socketService: SocketService ) {
    socketService.setupHubSocket('https://localhost:5001/', 'hub');
  }
}
