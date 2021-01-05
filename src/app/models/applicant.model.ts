import { ApplicantActivityRecord } from './applicantActivityRecord.model';
import { Level } from './level.model';
import { Batch } from './batch.model';
export class Applicant{
    public employee_id:string;
	public name:string;
	public email:string;
	public contactNumber:string;
	public batch:Batch;
	public level:Level;
	public status:string;
	public password:string;
	public  applicantActivities:ApplicantActivityRecord[];
}