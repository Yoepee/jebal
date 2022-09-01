import React from "react";
import styled from "styled-components";

const Wrapper = (props) => {
    return <StContainer {...props}>
        {props.children}
    </StContainer>;
};

export default Wrapper;

const StContainer = styled.div`
    border: 2.5px dotted #e8f5e9;
    background-color: #ffffff;
    min-width: 600px;
    max-width: 1200px;
    height: 200px;
   

    /* height: ${({ ht }) => ht};
    padding: ${({ pd }) => pd};
    margin: ${({ mg }) => mg}; */
`
