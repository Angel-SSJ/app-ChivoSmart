export interface User {
    id: number;
    email: string;
    name?: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
}

export interface AuthResponse {
    user: User;
    token: string;
}