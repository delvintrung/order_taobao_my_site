export interface PageProps {
  name: string;
  link_info?: string;
  image_feedback?: string;
}

export interface FeedbackCardProps {
  name?: string;
  link_info?: string;
  image_feedback?: string;
}

export interface Feedback {
  id?: string;
  name?: string;
  link_info?: string;
  image_feedback?: string;
}

export interface Session {
  user?: {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
  };
  expires: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  image: string;
}

export interface Order {
  _id: string;
  productName: string;
  userId?: string;
  productUrl: string;
  price: number;
  quantity: number;
  shipfee: number;
  totalPrice: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  phone: string;
  note?: string;
  owener?: User;
}

export interface ResponseInsert {
  status: number;
  message: string;
}
