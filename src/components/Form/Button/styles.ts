import styled from 'styled-components';
import { Button } from 'primereact/button';
import {shade} from 'polished'

export const Container = styled(Button)`
    width: 100%;
    padding: 15px;
    font-size: 20px;
    border-radius: 10px;
    
    background-color:var(--purple-700);
    border-color:var(--purple-700);

    &:hover{
        background:#380885!important;
    }
    div+&{
        margin-top:8px;
    }
`;
