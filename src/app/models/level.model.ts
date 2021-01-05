import { Activity } from './activity.model';
export class Level{
    public level_id:string; // can use time stamp plus some prefix ie like L23234 (where 23234 is time
    // stamp) //can set this value in one layer above . ie in service layer
public  number:number;
public name:string;
public description:string;
public qualification_points:number;
public activities:Activity[];
}