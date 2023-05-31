export interface CreateUserProfile {
  uid: string;
}

export interface FinishOnboarding {
  uid: string;
  q1: string;
  q2: string;
  q3: string;
  feedback_q1: string;
  feedback_q2: string;
}

export interface UpdateProfile {
  country: string;
  dob: string;
  phone_number: string;
}

export interface BlogPostTagProps {
  icon: any;
  name: string;
}

export interface CheckIfUserExist {
  uid: string;
}
