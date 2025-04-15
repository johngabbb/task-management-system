// Auth types
export interface LoginRequest {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    id: string;
    accessToken: string;
    username: string;
    expiresIn: number;
    role: string;
    name: string;
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
 ``
  export interface TaskRequest {
    name: string;
    userId: string;
    createdAt: Date;
    status: number;
    priority: number;
    estimated: number;
    description: string;
  }

  export interface TaskResponse {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    priority: string;
    estimated: number;
    code: string;
    account: User;
  }

  export enum Status {
    Pending = 1,
    InProgress = 2,
    QA = 3,
    Completed = 4
  }

  export enum Priority {
    Low = 1,
    Medium = 2,
    High = 3
  }