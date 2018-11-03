import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Observable } from 'rxjs';

export class Socket {
  type: number;
  payload: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  hubSocket: HubConnection;
  socket: Socket;
  setupHubSocket(url: string, hub: string) {
    this.hubSocket = new signalR.HubConnectionBuilder()
    .withUrl(url + hub)
    .configureLogging(signalR.LogLevel.Information)
    .build();
    this.hubSocket.start().catch(err => console.error('Cannot created websocket for "' + hub + '"'));
  }
  async sendToHubSocket(item: Socket) {
    await this.hubSocket.send('newMessage', item.type, item.payload);
  }
  retrieveSocketPayload() {
    this.hubSocket.on('messageReceived', (type: number, payload: string) => {
      this.socket.type = type;
      this.socket.payload = payload;
    });
  }
  constructor( ) {}
}
