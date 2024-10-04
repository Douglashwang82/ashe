import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { InputBoxComponent } from './input-box/input-box.component';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import { ChatBoxContent, ChatUserContent } from './chat-room';
import { ChatRoomService } from '../../services/chat-room.service';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [
    PanelModule,
    InputBoxComponent,
    ChatPanelComponent,
  ],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})
export class ChatRoomComponent {
    chatBoxContents: ChatBoxContent[] = [{
      userInput: 'first_user_input',
      tutorResponse: 'first_tutor_response',
    }];

    constructor(
      private readonly chatRoomService: ChatRoomService,
    ) {}

    onUserInputChange(userInput: ChatUserContent): void {
      this.chatRoomService.postChat(userInput).subscribe((tutorResponse) => {
        const chatBoxContent: ChatBoxContent = {
          userInput: userInput.userInput,
          tutorResponse: tutorResponse.tutorResponse,
        };
        
        this.chatBoxContents.push(chatBoxContent);
      });
    }
}
