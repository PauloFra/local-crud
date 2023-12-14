import styled from 'styled-components' 
import { Theme } from '../../Theme'
export const DivMaior = styled.div`
    min-height:93.6vh;
    background-color: ${Theme.colors.background1};
    color: ${Theme.fontColor.fontC1};
`
export const ButtonContact = styled.button`
    background-color: ${Theme.fontColor.fontC3};
    border: 0;
    width: 120px;
    padding: 20px;
    width:  ${props => (props.width)};
    padding:  ${props => (props.padding)};
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    font-size: 15px;
    transition: 0.5s;
    color: #FEFEFE;
    :hover{
        background-color:#FEFEFE ;
        color: ${Theme.fontColor.fontC3};
    }
`