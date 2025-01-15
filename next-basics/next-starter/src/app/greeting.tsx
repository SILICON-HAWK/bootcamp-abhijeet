"use client"

import React, { useState } from 'react';

// Form Component
const Form: React.FC<{ onSubmit: (username: string) => void }> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(username);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button type="submit">Submit</Button>
        </form>
    );
};

// Input Component
const Input: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ value, onChange }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your username"
    />
);

// Button Component
const Button: React.FC<{ type: 'button' | 'submit' | 'reset'; children: React.ReactNode }> = ({ type, children }) => (
    <button
        type={type}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
        {children}
    </button>
);

// Card Component
const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="background-animate bg-gradient-to-tr from-pink-400 to-purple-300 flex items-center justify-center p-8 rounded-md shadow-lg">
        {children}
    </div>
);

// Greeting Component
const Greeting: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card>
                {username ? (
                    <h1 className="text-2xl font-bold text-white">Hello {username}</h1>
                ) : (
                    <Form onSubmit={setUsername} />
                )}
            </Card>
        </div>
    );
};

export default Greeting;