import styled from 'styled-components'
import { Theme } from '../../Theme'
export const DivMaior = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${Theme.colors.background1};
    display: flex;
    
    align-items: center;
    justify-content: center;
    
`
export const DivForm = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colors.background2};
    padding:10px 30px;
    border: 1px solid rgb(244,81,98);
    a{
        text-decoration: none;
        color:${Theme.fontColor.fontC3};
        text-transform:capitalize;
        font-weight: bold;
        font-size: 20px;
    }    
    a:hover{
        text-decoration: underline;
    }  
    p{
        font-weight: bold;
        font-size: 20px;
        color:  ${Theme.fontColor.fontC4};
    }  
`
export const Label = styled.label`
      font-weight: bold;
      margin-bottom:5px;
      font-size:20px;
      color:  ${Theme.fontColor.fontC4};
`
export const Title = styled.h1`
text-align: center;
    color: ${Theme.fontColor.fontC3};
`
export const Input = styled.input`
    color: rgb(212,212,213);
    outline: 0;
    border: 0;
    font-size:20px;
    font-family:${Theme.fontFamily.default} ;
    border-bottom: 1px solid rgb(89,90,92);
    background-color: transparent;
    transition: 0.5s;
    :focus{
        border-bottom: 1px solid rgb(244,81,98);
    }
`       
export const Button = styled.button`
    cursor: pointer;
    padding: 10px 0;
    border: 0;
    font-size: 14px;
    color: white;
    font-weight: bold;
    transition: 0;
    background-color: rgb(244,81,98);
    :hover{
        background-color: #f45161a8;
    }
`       


export const DivLabelInput = styled.div`
    margin-bottom:20px;
    width: 300px;
    display: flex;
    flex-direction: column;
`


export const Error = styled.div`
 color: #cdda21;
 font-weight: bold;
 font-size: 14px;
 margin-top: 10px;
`