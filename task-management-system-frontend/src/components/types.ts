// Auth types
export interface LoginRequest {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    accessToken: string;
    username: string;
    expiresIn: number;
    role: string;
  }
  
  export interface User {
    id: string;
    name: string;
    username: string;
    password?: string; 
    role: string;
  }
  
  export interface CreateUserRequest {
    name: string;
    username: string;
    password: string;
  }
  
  export interface UpdateUserRequest {
    id: string;
    name: string;
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