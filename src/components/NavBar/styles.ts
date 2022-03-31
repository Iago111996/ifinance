import styled, { css } from "styled-components";

interface ContentProps {
  active: boolean;
}

export const Container = styled.div<ContentProps>`
  width: 100%;
  /* max-width: ${({ active }) => (active == true ? 240 : 78)}px; */
  min-height: 100vh;

  background-color: var(--background);

  position: relative;
  overflow: hidden;
  z-index: 1000;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Content = styled.div<ContentProps>`
  width: ${({ active }) => (active == true ? 240 : 78)}px;
  height: 100%;

  background-color: var(--shape);

  padding: 6px 14px;
  position: fixed;
  top: 0;
  left: 0;

  transition: all 0.5s ease;
`;

export const WrapperChildren = styled.div<ContentProps>`
  ${({ active }) =>
    active === true &&
    css`
      width: calc(100% - 240px);
    `};

  ${({ active }) =>
    active === false &&
    css`
      width: calc(100% - 78px);
    `};

  padding: 1.5rem 2rem;

  transition: all 0.5s ease;
  /* background-color: red; */
`;

export const LogoContent = styled.div``;

export const ButtonMenu = styled.button<ContentProps>`
  width: 2rem;
  height: 2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  cursor: pointer;

  font-size: 1.2rem;
  text-align: center;
  line-height: 3rem;
  color: var(--title);

  position: absolute;
  left: ${({ active }) => (active ? 90 : 50)}%;
  top: 12px;
  transform: translateX(-50%);
`;

export const WrapperLogo = styled.div<ContentProps>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: none;
`;

export const Logo = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--blue);

  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--green);
  }
`;

export const Nav = styled.nav<ContentProps>`
  ul {
    margin-top: 1.2rem;
  }

  ul li {
    position: relative;
    width: 100%;
    height: 3rem;
    margin: 0 0.5rem;
    list-style: none;
    line-height: 3rem;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: var(--title);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.4s ease;
    white-space: nowrap;

    :hover {
      color: var(--green);
    }
  }

  .btn {
    border: none;
    background: none;

    font-size: 1rem;
    font-weight: 500;
    color: var(--title);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.4s ease;
    white-space: nowrap;

    :hover {
      color: var(--green);
    }


  }

  .link-name {
    margin-left: 1rem;
    opacity: ${({ active }) => (active ? 1 : 0)};
    pointer-events: ${({ active }) => (active ? "auto" : "none")};
  }

  a + a {
    margin-left: 2rem;
  }

  ul li .tootrip {
    display: ${({ active }) => (active ? "none" : "block")};
    position: absolute;
    left: 122px;
    top: 0;

    transform: translate(-50%, -50%);

    border-radius: 6px;
    height: 35px;
    width: 122px;
    background-color: var(--background);

    font-size: 1rem;
    font-weight: 500;
    color: var(--title);
    line-height: 35px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
  }

  ul li:hover .tootrip {
    transition: all 0.5s ease;
    opacity: 1;
    top: 50%;
  }

  .icon-item {
    font-size: 1.2rem;
    height: 3rem;
    min-width: 2rem;
    border-radius: 12px;
    line-height: 3rem;
    text-align: center;
  }
`;

export const WrapperProfile = styled.div<ContentProps>`
  width: 100%;
  background-color: var(--text);
  position: absolute;
  bottom: 0;
  left: 0;
  color: var(--title);

  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
`;

export const Profile = styled.div`
  height: 5rem;
  position: relative;
  padding: 10px 6px;

  display: flex;
  align-items: center;

  .icon-user {
    color: var(--shape);
    font-size: 2.2rem;
    margin-right: 1rem;
  }
`;

export const ProfileDetails = styled.div<ContentProps>`
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: var(--shape);
`;

export const Email = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--shape);
`;
