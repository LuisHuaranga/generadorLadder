import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormPromptComponent } from './components/form-prompt/form-prompt.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    MatCardModule,
    FormPromptComponent,
    NgxUiLoaderModule
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public prompt?: string;
  public childVariableChange?: any;
  public timeResponse: any = 0.0;
  public memoryUsageMB: any = 0.0;
  public cpuProfileSummary: any = 0.0;


  constructor(){};

  ngOnInit(): void{
  }

  onChildVariableChange(value : any){
    this.childVariableChange = value;
    this.timeResponse = this.childVariableChange.responseTimeSeg;
    this.memoryUsageMB = this.childVariableChange.memoryUsageMB;
    this.cpuProfileSummary = this.childVariableChange.cpuProfileSummary;
  }

  
}
