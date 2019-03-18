import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  background: #fbfbfb;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #0366ee;
    &:focus {
      outline: 0;
      border-color: #d81103;
    }
  }
  button,
  input[type="submit"] {
    width: auto;
  }
  fieldset {
    border: 0;
    padding: 0;
    width: 90%;
    &[disabled] {
      opacity: 0.5;
    }

    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  .button__container {
    display: flex;
    justify-content: space-evenly;
  }
`;

Form.displayName = "Form";

export default Form;
