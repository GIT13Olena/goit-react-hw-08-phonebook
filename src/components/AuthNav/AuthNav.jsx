import { AuthNavStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavStyled to="/register">Sign Up</AuthNavStyled>
      <AuthNavStyled to="/login">Log In</AuthNavStyled>
    </div>
  );
};
