import styled from 'styled-components';
import { logOut } from 'redux/auth/authThunk';
import { getUser } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateUser } from 'redux/auth/authSlice';

import logout from '../../icons/exit.svg';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      dispatch(updateUser({ name: storedName }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (name) {
      localStorage.setItem('userName', name);
    }
  }, [name]);

  const onLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('userName');
    dispatch(updateUser({}));
  };

  if (!name) {
    return null;
  }

  return (
    <UserNav>
      <StyledName> &#128526; {name} </StyledName>
      <img src={logout} alt="svg logout" onClick={onLogOut} />
    </UserNav>
  );
};

export const UserNav = styled.div`
  display: flex;
`;

export const StyledName = styled.span`
  margin-right: 15px;
  font-size: 22px;
  color: black;
`;
