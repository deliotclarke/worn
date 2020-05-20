import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  box-sizing: border-box;
  border: #e1e1d6 solid 3px;
  border-radius: 3px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 25rem;
`;

export const StyledHeader = styled.header`
  color: #e1e1d6;
  font-weight: 700;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: salmon;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  width: 65%;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  background: #fafafa;
  color: #2b343f;
  border: transparent;
  border-radius: 2px;
  width: 65%;
  height: 1.5rem;
  font-size: 1rem;
  padding-left: 0.2rem;
`;

export const StyledButton = styled.button`
  margin-top: 2rem;
  border: transparent 1px;
  color: #282c34;
  border-radius: 3px;
  background: salmon;
  font-size: 1rem;
  font-weight: 700;
  height: 1.75rem;
  width: 8rem;
`;

export const StyledErrorFlag = styled.span`
  color: salmon;
  font-size: 0.8rem;
`;
