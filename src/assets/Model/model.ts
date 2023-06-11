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

export interface Blog {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: [];
  $updatedAt: string;
  category: string;
  cover_image_url: string;
  name: string;
  owner_id: string;
  partial_description: string;
  readtime: string;
}

export interface UserTOCProps {
  [key: string]: {
    [key: string]: any[];
  };
}

export interface DirectionButtonProps {
  tableOfContent: UserTOCProps;
  handleFetchLesson: Function;
}

export interface Lesson {
  title: string;
  icon: string;
  active: boolean;
  completed: boolean;
}

export interface SidebarProps {
  sidebarControl: boolean;
  handleSidebarMenu: Function;
  tableOfContent: UserTOCProps;
  handleFetchLesson: Function;
}

export interface IconComponentsProps {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface FetchedUser {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  email: string;
  name: string;
}

export interface TopicProps {
  percent: number;
  name: string;
  numberOfLessons: number;
  numberOfCompletedLessons: number;
}
