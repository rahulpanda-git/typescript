export class Person{
    constructor(private first_name:string, private last_name:string){}
    print_details(){
        console.log("Name : "+this.first_name+" "+this.last_name);
    }
}
