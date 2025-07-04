export interface ContactFormData {
    name: string;
    email: string;
    number: string;
    message: string;
    budget: string;
    services: string[];      // List of selected services
    socialMedia: string[];   // List of selected social platforms
    createdAt?: string;
}