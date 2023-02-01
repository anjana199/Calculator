import { Component } from '@angular/core';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent {
result:number=0
num1:number=0
factor:number=1

fact(){
 for (let i=1;i=this.num1;i++){
  this.factor=this.num1*i
 }
 this.result=this.factor

}

}