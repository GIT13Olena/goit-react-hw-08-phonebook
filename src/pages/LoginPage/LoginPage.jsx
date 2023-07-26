import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { logIn } from 'redux/auth/authThunk';
import { updateUser } from 'redux/auth/authSlice';
const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(logIn(data));
    dispatch(updateUser(data));
  };

  return (
    <>
      <LoginForm onData={onLogin} />
    </>
  );
};

export default LoginPage;
