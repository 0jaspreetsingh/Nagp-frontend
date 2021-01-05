import { Level } from './level.model';
import { Applicant } from './applicant.model';
import { Activity } from './activity.model';
export class ApplicantActivityRecord{

    public applicantActvityId:number;
	public level_id:Level;
	//int level_id;
	public activity_id:Activity;
	public status:string;
	public score:number;
	public points:number;
	public assignee:Applicant;
	public Description:string;
	public Document:string;
	public startdate:string;
	public donedate:string;
	public completiondate:string;

}