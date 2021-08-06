import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Container, InputComponent } from './styles';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon: string
    wantErros?: boolean
}
const Input: React.FC<InputProps> = ({ wantErros, name, icon, ...rest }) => {
    const inputRef = useRef<InputText>(null)

    const { fieldName, defaultValue, error, registerField } = useField(name)
    const [focused, setIsFocused] = useState(false)
    const [filed, setIsFiled] = useState(false)

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])


    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    return (
        <Container isErrored={!!error} isFiled={filed} isFocused={focused}>

            <span className="p-input-icon-left">
                <i className={icon} />
                <InputComponent 
                    onFocus={handleInputFocus}
                    defaultValue={defaultValue}
                    className={InputComponent} 
                    ref={inputRef}
                    {...rest} 
                />
            </span>
        </Container>
    );
}

export default Input;