import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpenaiService } from '../../services/openai.service';
import { XmlService } from '../../services/xml-service.service';

@Component({
  selector: 'app-form-prompt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-prompt.component.html',
  styleUrl: './form-prompt.component.css',
})
export class FormPromptComponent {
  @Output() childVariableChange = new EventEmitter<string>();
  public textArea: string = '';
  public respuesta: any = '';
  public objectResp: object = {};

  constructor(
    private _apenaiService: OpenaiService,
    private _xmlService: XmlService
  ) {}

  sendPrompt() {
    const body = { prompt: this.textArea };
    this._apenaiService.sendPrompt(body).subscribe(
      (resp) => {
        this.respuesta = resp;
        this.childVariableChange.emit(resp);
        this.objectResp = this._xmlService.convertXmlToJson(resp.respuestaGTP);
        console.log(resp.respuestaGTP);
        console.log(this.objectResp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
