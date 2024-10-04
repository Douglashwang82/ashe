import { Component, Input } from '@angular/core';
import { PanelBoxComponent } from './panel-box/panel-box.component';
import { ChatBoxContent } from '../chat-room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-panel',
  standalone: true,
  imports: [PanelBoxComponent, CommonModule],
  templateUrl: './chat-panel.component.html',
  styleUrl: './chat-panel.component.scss'
})
export class ChatPanelComponent {
  @Input() chatBoxContents: ChatBoxContent[] = [];
}
