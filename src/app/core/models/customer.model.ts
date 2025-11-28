export interface Customer {
  id: number;
  name: string;
  country: string;
  company: string;
  representative: string;
  status: string;
  date: string;
  activity: number;
  verified: boolean;
  image?: string;
  flag?: string;
}
