import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {OpenaiService} from '../../services/openai.service';

@Component({
  selector: 'app-form-prompt',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  templateUrl: './form-prompt.component.html',
  styleUrl: './form-prompt.component.css'
})
export class FormPromptComponent {
  
  public textArea: string;

  constructor(private _apenaiService: OpenaiService){
    this.textArea =  '';
  };

  sendPrompt(){
    const body = {'prompt': this.textArea}
    this._apenaiService.sendPrompt(body).subscribe(
      resp => {
        console.log(resp);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
