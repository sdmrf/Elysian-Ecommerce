import { store } from '@/redux/store'; 

// Type for Register Form Values (for each step)
export interface RegisterFormValuesStep1 {
  phoneNumber: string;
}

export interface RegisterFormValuesStep2 {
  otp: string;
}

export interface RegisterFormValuesStep3 {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Type for the complete form values
export interface CompleteRegisterFormValues {
  phoneNumber: string;
  otp: string;
  name: string;
  email: string;
  password: string;
}

// Type for the handler functions for each step
export interface RegisterStep1Props {
  onNext: (values: RegisterFormValuesStep1) => void;
}

export interface RegisterStep2Props {
  onNext: (values: RegisterFormValuesStep2) => void;
}

export interface RegisterStep3Props {
  onComplete: (values: RegisterFormValuesStep3) => void;
}

// Type for the form values (email and password)
export interface LoginFormValues {
  email: string;
  password: string;
}

// Type for the API response when logging in
export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

// CartItem type
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// CartState type
export type CartState = {
  items: CartItem[];
};

// RootState type, inferred from the store
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch type, inferred from the store
export type AppDispatch = typeof store.dispatch;
