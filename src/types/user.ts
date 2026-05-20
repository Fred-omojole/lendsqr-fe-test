export type Guarantor = {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
};

export type Status = "active" | "inactive" | "pending" | "blacklisted";

export type User = {
  id: string;
  orgName: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: number;
  typeOfResidence: string;
  dateJoined: string;
  status: Status;

  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;

  twitter: string;
  facebook: string;
  instagram: string;

  guarantors: Guarantor[];
};
