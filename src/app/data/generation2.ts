export class GenNode2 {
    constructor(
       public expandable: boolean, public filename: string, public level: number, public type: any) {}
 }
 
 export const GEN_DATA2 = JSON.stringify({
    炎帝: {
       黄帝: {
          原地: {
             原地: 'yuan wei',
             core: 'ts'
          }
       },
       material2: {
          src: {
             button: 'ts',
             checkbox: 'ts',
             input: 'ts'
          }
       }
    }
 });