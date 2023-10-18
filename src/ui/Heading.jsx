import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    //* as is special prop given by styled components which gives semantically correct html elements if we use any other prop it wont be correct. As can be anything like h1,h2, p, button any html element.
    css`
      /* Css is helper function which helps in maintaining the style syntax  */
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}
${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 500;
      font-size: 2rem;
    `}
  line-height:1.4
`;

export default Heading;
