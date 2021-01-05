import { Batch } from './batch.model';
import { Level } from './level.model';
export class Activity{

    public activity_id:string; // level+batch 2019java
	public level:Level;
	public batch:Batch;
	public name:string;
	public description:string;
	public points:number; // points associated with an activity
	public max_qualification:number; // no of time a same applicant can do this activity
}