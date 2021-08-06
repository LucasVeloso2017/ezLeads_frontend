import styled from 'styled-components';

import Banner from '../../assets/bg.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    
`;
export const SignSide = styled.div`
    width: 40%;
    height: 100vh;
    
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    
    h2{
        padding: 30px;
        color: var(--purple-700);
    }

    form{
        width: 60%;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        form{
            width: 80%;
        }
    }
    @media only screen and (max-width: 800px) {
        width: 50%;
        form{
            width: 80%;
        }
    }
`;
export const BannerSide = styled.div`
    width: 60%;
    height: 100vh;
    background-image: url(${Banner});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    .foreground{
        background-color: rgba(71,12,168,0.8);
        width: 100%;
        height: 100%;
    }
    @media only screen and (max-width: 600px) {
        display:none;
    }
`;
