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
  firstName: string;
  lastName: string;
  country: string;
  dob: string;
  email: string;
  phoneNumber: string;
}
