import { Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ChatBoxContent } from '../../chat-room';

@Component({
  selector: 'app-panel-box',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './panel-box.component.html',
  styleUrl: './panel-box.component.scss'
})
export class PanelBoxComponent {
  @Input() chatBoxContent: ChatBoxContent | undefined;
}
