import { Component , Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OpenaiService} from '../../services/openai.service';

@Component({
  selector: 'app-form-prompt',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-prompt.component.html',
  styleUrl: './form-prompt.component.css'
})
export class FormPromptComponent{
  @Output() childVariableChange = new EventEmitter<string>();
  public textArea: string = '';
  public respuesta: any = '';

  constructor(private _apenaiService: OpenaiService){
  };


  sendPrompt(){
    const body = {'prompt': this.textArea}
    this._apenaiService.sendPrompt(body).subscribe(
      resp => {
        this.respuesta = resp;
        this.childVariableChange.emit(resp);
        console.log(resp);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
