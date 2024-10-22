// src/services/authService.js
export const loginUser = async ({ username, password }) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // Salvar token localmente, por exemplo
        localStorage.setItem('token', data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      return false;
    }
  };
  
  export const verify2FA = async ({ code }) => {
    // Lógica para verificar 2FA
    try {
      const response = await fetch('http://localhost:5000/api/users/verify2FA', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      return response.ok;
    } catch (error) {
      console.error('Erro ao tentar verificar 2FA:', error);
      return false;
    }
  };
  