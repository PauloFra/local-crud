import styled from 'styled-components'
import {Theme} from '../../Theme'

export const InputContact = styled.input`
    padding: 7px 6px;
    width: 260px;
    outline: 0;
    border: 0;
    color: white;
    
    font-size: 18px;
    border: 1px solid ${Theme.fontColor.fontC2};
    background-color: transparent;
    transition: 0.3s;
        :focus{
            border: 1px solid ${Theme.fontColor.fontC3};
        }
`
export const LabelContact = styled.label`
    padding-bottom: 10px;
    font-weight: bold;
    text-transform: capitalize;
    color: ${Theme.fontColor.fontC2};
`
export const TitleC = styled.h2`
color: ${Theme.fontColor.fontC3};
font-size: 50px;
`
export const Button = styled.button`
  background-color: ${Theme.fontColor.fontC3};
    border: 0;
    padding: 10px;
    width:  ${props => (props.width)};
    padding:  ${props => (props.padding)};
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
export const TextAContact = styled.textarea`
    outline: 0;
    border: 0;
    color: white;
    padding: 7px 6px;
    font-size: 18px;
    border: 1px solid ${Theme.fontColor.fontC2};
    background-color: transparent;
    transition: 0.3s;
        :focus{
            border: 1px solid ${Theme.fontColor.fontC3};
        }
`

export const Error = styled.div`
 color: #cdda21;
 font-weight: bold;
 font-size: 14px;
 margin-top: 10px;
`
export const DivMainLeft = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.colors.background2};
    form{
        display: grid;
        grid-template-columns: auto auto;
        gap: 15px 30px;
    }
`
export const DivInputLabel = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivInputLabelTEXT = styled.div`
    display: flex;
    grid-column-start: 1;
    grid-column-end: 3;
    flex-direction: column;
`
export const DivMainRight = styled.div`
    width: 50%;
    display: flex;
    padding: 0 90px;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.colors.background1};
`
export const DivMaior = styled.div`
    display: flex;
    font-size: 22px;
    min-height:93.6vh;
    width: 100vw;
`