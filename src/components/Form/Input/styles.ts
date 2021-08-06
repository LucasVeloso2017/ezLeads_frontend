import styled, { css } from 'styled-components';
import { InputText } from 'primereact/inputtext';

interface ContainerFocused{
    isFocused:boolean
    isFiled:boolean
    isErrored:boolean
}

export const Container = styled.div<ContainerFocused>`
    background:#FFF;
    border-radius:10px;
    padding:14px;
    width:100%;
    display:flex;
    align-items:center;

    color:#212121;
    border:2px solid white;
    transition:border,color 0.2s;

    ${props => props.isErrored && css`
        border:2px solid red;
    ` }

    ${props => props.isFocused && css`
        color:var(--purple-700);
        border:2px solid var(--purple-700);
    ` }

    ${props => props.isFiled && css`
        color:var(--purple-700);
    ` }
    span{
        i{
            ${props => props.isFocused && css`
                color:var(--purple-700)!important;
            ` }
            ${props => props.isFocused && css`
                color:var(--purple-700);
            ` }
        }
    }

    & + div{
        margin-top:8px;
    }

`;

export const InputComponent = styled(InputText)`
    width: 100%;
    color:#212121;
    flex:1;
    border:0;
    background:transparent;     
    &:enabled:focus{
        box-shadow: 0 0 0 0.2rem white;
    }
    &:enabled:hover{
        border-color: white;
    }

    

`
