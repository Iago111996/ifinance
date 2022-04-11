import styled from "styled-components";

interface InputProps {
  inputIsActivetity: boolean;
}

export const Container = styled.div``;

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
  color: var(--title);
  line-height: 1rem;
`;

export const WrapperWarning = styled.div`
  width: 100%;
  max-width: 400px;

  padding: 1rem;
  margin: 0 auto;
  box-shadow: 0px 0px 5px var(--text);

  background-color: var(--shape);

  border-radius: 1rem;

  padding: 1rem 0;

  text-align: center;
`;

export const WarningText = styled.h1`
  padding: 0;
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1rem;
`;

export const UploadFormat = styled.form<InputProps>`
  width: calc(100% - 4rem);
  height: 2rem;

  background-color: var(--shape);
  transition: display 3s ease;

  opacity: ${({ inputIsActivetity }) => (inputIsActivetity ? 1 : 0)};
  display: ${({ inputIsActivetity }) => (inputIsActivetity ? "auto" : "none")};

  button {
    width: 5rem;
    padding: 0.1rem 0.4rem;
    border: 1px solid var(--blue);
    border-radius: 0.3rem;
    background-color: var(--background);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    color: var(--text);
    transition: 0.4s ease-in;

    &:hover {
      background-color: var(--blue);
      color: var(--shape);
    }
  }
`;

export const UploadSection = styled.div<InputProps>`
  width: calc(100% - 1rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all .5s ease;

  opacity: ${({ inputIsActivetity }) => (inputIsActivetity ? 1 : 0)};
  .upload {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text);
    outline: none;
  }

  .btn-upload {
    width: 5rem;
    padding: 0.1rem 0.4rem;
    border: 1px solid var(--blue);
    border-radius: 0.3rem;
    background-color: var(--background);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    color: var(--text);
    transition: 0.4s ease-in;

    &:hover {
      background-color: var(--blue);
      color: var(--shape);
    }
  }

  input[type="file"]::-webkit-file-upload-button {
    /* width: 5rem; */
    padding: 0.2rem 0.4rem;
    border: 1px solid var(--blue);
    border-radius: 0.3rem;
    background-color: var(--background);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--text);
    transition: 0.4s ease-in;
  }
`;

export const WrapperProgress = styled.div`
  /* margin-bottom: 2rem; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .button-add {
    width: 3rem;
    height: 3rem;

    background-color: var(--shape);

    border-radius: 1.5rem;
    border: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.4s ease;

    &:hover {
      background-color: var(--hover_color);
    }
  }
`;

export const ListGrid = styled.div`
  width: 100%;

  box-shadow: 0px 0px 5px var(--text);

  background-color: var(--shape);

  border-radius: 1rem;

  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

export const WrapperAttachments = styled.div`
  position: relative;
  max-height: 13rem;
  border-radius: 0.5rem;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 100%;
    max-height: 70%;
    display: block;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
  }

  button {
    border: none;
    background-color: transparent;

    cursor: pointer;

    position: absolute;
    right: 0;
  }
`;

export const AttachmentText = styled.h1`
  padding: 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1rem;
`;

export const Wrapper = styled.div<InputProps>`
  width: ${({ inputIsActivetity }) => (inputIsActivetity ? 30 : 3)}rem;
  height: 3rem;

  /* margin-right: 1rem; */

  padding: 0.5rem 0;

  background-color: var(--shape);

  border-radius: 1.5rem;

  transition: all 0.5s ease;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    position: absolute;
    top: 1.5rem;
    right: 5rem;
  }
`;
