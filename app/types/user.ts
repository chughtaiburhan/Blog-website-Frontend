
export interface User {
  _id: string;
  name: string;
  email: string;
  number: string;
  avatar?: string | null;
  blogsCount: number;
  likedBlogs?: string[];
  receivedLikesCount?: number;
  token: string;
  otp?: string | null;
  isResetVerified?: boolean;
}

export interface UserData {
  user: User | null;
  loading: boolean;
  error: string | null;
}
