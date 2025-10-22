interface Author {
  _id: string;
  name: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
}

interface Likes {
  userId: string;
  blogId: string;
}

interface Comments {
  userId: string;
  blogId: string;
  text: string;
}

export interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  content: string;
  authorId: Author;
  categoryId: Category;
  metaDescription: string;
  likes?: Likes[];
  comments?: Comments[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface BlogsData {
  blogsData: Blog[];
  loading: boolean;
  error: string | null;
}

