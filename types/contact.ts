export interface ContactFormData {
    name: string;
    _id?:string;
    email: string;
    number: string;
    message: string;
    budget: string;
    createdAt?: Date;      // Optional, will be set by the server
    services: string[];      // List of selected services
    socialMedia: string;   // List of selected social platforms
    role?: string;           // Default role is 'user'
}