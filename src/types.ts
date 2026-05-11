export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  role: 'customer' | 'admin';
  createdAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'lunch' | 'dinner' | 'sides' | 'desserts';
  description: string;
  price: number;
  calories?: number;
  protein?: string;
  isVeg: boolean;
  imageUrl?: string;
}

export interface TiffinPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  frequency: 'daily' | 'weekly' | 'monthly';
  meals: string[];
  isPopular?: boolean;
  features: string[];
}

export interface OrderItem {
  itemId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id?: string;
  customerId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'delivering' | 'delivered' | 'cancelled';
  deliveryAddress: string;
  createdAt: any;
  paymentStatus: 'pending' | 'paid' | 'failed';
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
  profession?: string;
}
