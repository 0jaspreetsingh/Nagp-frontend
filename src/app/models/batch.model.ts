import { Activity } from './activity.model';

export class Batch {

	public batch_id: string; // can use time stamp plus some prefix ie like B23234 (where 23234 is time
	// stamp) //can set this value in one layer above . ie in service layer
	public year: number;
	public technology: string;
	public description: string;
	public qualification_points:number;
	public startdate: any;
	public activities: Activity[];
}