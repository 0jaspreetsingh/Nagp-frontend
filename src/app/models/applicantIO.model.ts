import { ApplicantActivityRecord } from './applicantActivityRecord.model';
export class ApplicantIO{
    public employee_id:string;
	public name:string;
	public email:string;
	public contactNumber:string;
	public batch_id:string;
    public level_id:string;
	public nagp_status:string;
	public password:string;
	public  applicantActivities:ApplicantActivityRecord[];
}