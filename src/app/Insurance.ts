//import { runInThisContext } from "node:vm";

export default class Insurance {
    public Id:string ='';
    public iname:string = '';
    public iplan:string = '';
    public idur:string = '';
    // constructor(public Id:number,public iname:string, public iplan:string, public idur:number) {
        
    // }  
    getData(){
        // return "ID: " + this.Id + "\nName: " + this.iname + "\nPlan: " + this.iplan + "\nDuration: " + this.idur
        return `ID: ${this.Id} \nName: ${this.iname} \nPlan: ${this.iplan} \nDuration: ${this.idur}`
    }
    clearData(){
        this.Id = "ID"
        this.iname = "Name"
        this.iplan = "Plan"
        this.idur = "Duration"
    }
}