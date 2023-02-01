import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    
    input {
        background-color: transparent;
        border: 0;
        border: 1px solid #81259D;
        border-radius: 24px;
        color: #333;
        font-size: 16px;
        height: 48px;
        outline: none;
        padding: 12px 20px;
        transition: all 0.2s ease-in-out;
        width: 100%;
        &:hover {
            border-color: #5A1A6E;
        }
        &:focus {
            box-shadow: 0 0 0 4px rgba(135, 48, 162, 0.3);
        }
    }

`;

export const ErrorMessage = styled.p`
    color: #D53D69;
    font-size:12px;
    margin-top:8px;
    margin-left:20px;

    &::before {
        content: '';
        color: #D53D69;
    }
`;