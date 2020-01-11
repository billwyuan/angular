import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class FakeService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  policies =  [
    {  id:  1,  num:  'PO1', amount: 1000, userId: 1, clientId: 1, description: 'Insurance policy number PO1' },
    {  id:  2,  num:  'PO2', amount: 2000, userId: 1, clientId: 2, description: 'Insurance policy number PO2' },
    {  id:  3,  num:  'PO3', amount: 3000, userId: 1, clientId: 3, description: 'Insurance policy number PO3' },
    {  id:  4,  num:  'PO4', amount: 4000, userId: 1, clientId: 4, description: 'Insurance policy number PO4' }
   ];

   return {policies};

  }
}
