import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatUserContent } from '../chat-room';


@Component({
    selector: 'app-input-box',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './input-box.component.html',
    styleUrl: './input-box.component.scss'
})
export class InputBoxComponent {
  
  protected value = '';
  @Output() userInputChange: EventEmitter<ChatUserContent> = new EventEmitter();


  onSubmit(): void {
    if (this.value) {
      const userContent: ChatUserContent = { userInput: this.value };
      this.userInputChange.emit(userContent);
      this.value = '';
    }
  }
}
