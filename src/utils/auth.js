export const isAuthenticated = (requiredUserType) => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('type');
    
    return token && userType === requiredUserType;
  };
  