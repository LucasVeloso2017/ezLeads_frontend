import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface BtnProps extends ButtonProps{
    label:string
}
const Button: React.FC<BtnProps> = ({label,...rest})=> {
    return(
        <Container label={label} type="button" {...rest}/>
    );
}

export default Button;