import { Component } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent {
  num1:number=0
  result:boolean=true

  chkprime(){
    for (let i=2;i<this.num1;i++)
    {
    if(this.num1%i==0){
    this.result=false
    break
    }

    }
  }

}
