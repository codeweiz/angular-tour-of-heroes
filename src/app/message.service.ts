import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// export 对外暴露 message 缓存，以及两个方法：add()、clear()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  constructor() { }
}
