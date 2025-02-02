    
    export type User = {
        id: string;
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: string;
    }
    
    export const USERS: User[] = [
    {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "username": "mike",
        "email": "@", 
        "password": "password123",
        "firstName": "Mike",
        "lastName": "Wilson",
        "createdAt": "2024-01-15"
    },
    {
        "id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        "username": "jane_smith",
        "email": "jane@example.com",
        "password": "securePass456", 
        "firstName": "Jane",
        "lastName": "Smith",
        "createdAt": "2024-01-16"
    },
    {
        "id": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
        "username": "mike_wilson",
        "email": "mike@example.com",
        "password": "mikePass789",
        "firstName": "Mike",
        "lastName": "Wilson", 
        "createdAt": "2024-01-17"
    },
    {
        "id": "a8098c1a-f86e-11da-bd1a-00112444be1e",
        "username": "sarah_johnson",
        "email": "sarah@example.com",
        "password": "sarahPass321",
        "firstName": "Sarah",
        "lastName": "Johnson",
        "createdAt": "2024-01-18"
    },
    {
        "id": "b5c89418-9c83-4e58-9173-5f26b7a3a097",
        "username": "alex_brown",
        "email": "alex@example.com",
        "password": "alexPass654",
        "firstName": "Alex",
        "lastName": "Brown",
        "createdAt": "2024-01-19"
    }
]
