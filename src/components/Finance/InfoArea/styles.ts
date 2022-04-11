import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;



  @media (max-width: 768px) {
    flex-direction: column;
  }
`;



export const ResumeArea = styled.section`


  @media (max-width: 768px) {
    width: 80%;
  }
`;
