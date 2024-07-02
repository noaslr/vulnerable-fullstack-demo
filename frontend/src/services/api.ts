const API_URL = 'http://localhost:5000/api';

// Vulnerable: API key exposed in frontend code
const API_KEY = 'AIzaSyDNYs9Dys_bwSPQz8pA-VVN1qW7qVanRXI';

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const getUserDetails = async (username: string) => {
  const response = await fetch(`${API_URL}/users/${username}`);
  return response.json();
};

export const echo = async (message: string) => {
  const response = await fetch(`${API_URL}/echo?message=${message}`);
  return response.text();
};

// Vulnerable: Sending API key in request
export const getData = async (fileName: string) => {
  const response = await fetch(`${API_URL}/data?file=${fileName}&key=${API_KEY}`);
  return response.text();
};