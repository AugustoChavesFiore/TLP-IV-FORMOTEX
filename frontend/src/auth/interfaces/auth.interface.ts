

export interface Auth {
    name?: string;
    email: string;
    password: string;
};

export interface AuthResponse {
    user:  User;
    token: string;
}

export interface User {
    _id:       string;
    name:      string;
    email:     string;
    role:      string;
    createdAt: Date;
    updatedAt: Date;
}
