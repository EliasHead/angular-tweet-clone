import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: string[] = [];

  constructor() { }

  addMessages(messages: string) {
    this.messages.push(messages)
  }
  getMessages() { return this.messages}

  clearMessages() {
    this.messages = [];
  }
}
