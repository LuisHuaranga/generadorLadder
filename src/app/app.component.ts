import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OpenaiService } from './services/openai.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public prompt?: string;

  constructor(private _apenaiService: OpenaiService){};

  ngOnInit(): void{
    this.sendPrompt("crea un enclavamiento simple");
  }

  sendPrompt(prompt: string){
    const body = {'prompt': prompt}
    this._apenaiService.sendPrompt(body).subscribe(
      resp => {
        if(resp.status == 1){
          console.log(resp);
        }
      },
      err =>{
        console.log(err);
      }
    )
  }
  
}
