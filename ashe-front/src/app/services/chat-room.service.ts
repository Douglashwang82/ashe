import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatTutorContent, ChatUserContent } from '../components/chat-room/chat-room';
import { map, Observable } from 'rxjs';
interface BackendCommunication {
  status: string;
  received_message: string;
  processed_message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {
  private baseUrl = 'http://127.0.0.1:5000/api';
  constructor(
    private http: HttpClient,
  ) { }

  postChat(userInput: ChatUserContent): Observable<ChatTutorContent> {
    const request = {
      message: userInput.userInput,
    };

    return this.http.post<BackendCommunication>(`${this.baseUrl}/communication`, request).pipe(map((response) => this.buildTutorResponse(response)));
  }

  private buildTutorResponse(backendResponse: BackendCommunication): ChatTutorContent {
    return {
      tutorResponse: backendResponse.processed_message,
    };
  }
}
