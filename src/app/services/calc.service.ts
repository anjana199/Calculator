import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  performAddition(data:any){
    let option={
      "method":"post",
      "body":JSON.stringify(data),
      "headers":{
        "content-type":"application/json"
      }
      
     }
      return fetch("http://127.0.0.1:8000/add",option)
    
  }

  performSubtraction(data:any){
    let option={
      "method":"post",
      "body":JSON.stringify(data),
      "headers":{
        "content-type":"application/json"
      }
      
     }
      return fetch("http://127.0.0.1:8000/sub",option)
    
  }
}
