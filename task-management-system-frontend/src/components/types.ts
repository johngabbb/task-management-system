// Auth types
export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    accessToken: string;
    email: string;
    expiresIn: number;
    role: string;
  }
  
  // User types
  export interface User {
    id: string;
    fullName: string;
    username: string;
    password?: string; // Optional for security reasons
    role: string;
  }
  
  export interface CreateUserRequest {
    fullName: string;
    username: string;
    password: string;
  }
  
  export interface UpdateUserRequest {
    id: string;
    fullName: string;
    username: string;
    password: string;
  }
  
  // Role types
  export interface Role {
    id: string;
    name: string;
  }
  
  export interface UserRole {
    id: string;
    accountId: string;
    roleId: string;
    account?: User;
    role?: Role;
  }