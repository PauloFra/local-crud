import styled from "styled-components";
import { Field  } from "formik";
import {Theme} from "../../Theme";

export const TitleJogosForm = styled.h2`
    margin:30px 0;
    color:${Theme.fontColor.fontC3};
    font-size: 40px;
    
`
export const InputForm = styled(Field)`
    padding: 30px;
`
export const Label = styled.label`
      font-weight: bold;
      margin-bottom:5px;
      font-size:20px;
      color:  ${Theme.fontColor.fontC4};
      :focus{
        color: 1px solid rgb(244,81,98);
     }
`
export const Title = styled.h1`
text-align: center;
    color: ${Theme.fontColor.fontC3};
`
      
export const Button = styled.button`
    cursor: pointer;
    padding: 10px 0;
    width: 300px;
    border: 0;
    font-size: 14px;
    grid-column-start: 1;
    grid-column-end: 3;
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
    width: 400px;
    display: flex;

    flex-direction: column;
`
export const DivLabelInputButton = styled.div`
    
    width:100%;
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivForm = styled.div`
    border-radius: 10px;
    display: grid;
    background-color: ${Theme.colors.background2};
    padding:30px;
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
    } 
    input{
    color: rgb(212,212,213);
    outline: 0;
    border: 0;
    font-size:20px;
    font-family:${Theme.fontFamily.default} ;
    border-bottom: 1px solid rgb(89,90,92);
    background-color: transparent;
    transition: 0.5s;
    }

    input:focus{
        border-bottom: 1px solid rgb(244,81,98);
    }
    form{
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px 30px;
    } 
`


export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 84vh;
    align-items: center;
`

export const Error = styled.div`
 color: #cdda21;
 font-weight: bold;
 font-size: 14px;
 margin-top: 10px;
`