import { FormHandles } from '@unform/core';
import React, { useRef } from 'react';
import Input from '../../components/Form/Input'
import Button from '../../components/Form/Button'
import { Form } from '@unform/web'
import { Container,BannerSide,SignSide } from './styles';

const Signin: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    return(
        <Container>
            <SignSide>        
                <h2>Entrar</h2>
                <Form ref={formRef} onSubmit={()=>{}}>
                    <Input name="email" icon="pi pi-envelope" placeholder="email"/>
                    <Input name="password" icon="pi pi-lock" placeholder="Senha"/>
                    <Button label="Entrar"/>
                </Form>
            </SignSide>
            <BannerSide>
                <div className="foreground">
                    
                </div>
            </BannerSide>
        </Container>
    );
}

export default Signin;