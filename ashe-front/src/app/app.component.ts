import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { DatesSheetComponent } from "./components/dates-sheet/dates-sheet.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatRoomComponent, DatesSheetComponent, MatSlideToggleModule, MatExpansionModule, FormsModule, DividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ashe-front';
  readonly panelOpenState = signal(false);
}
