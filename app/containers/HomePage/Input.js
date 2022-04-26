import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0.75rem;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: inherit;
  :focus {
    border-color: #587ef5;
    outline: 0;
  }
`;

export default Input;
