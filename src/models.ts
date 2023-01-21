export interface ITournament{
    id:string;
    title:string;
    start:Date;
    end:Date;
    isOnline:boolean;
    city?:string;
    peopleNumber:number;
}