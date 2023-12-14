import styled from 'styled-components'
import {Theme} from '../../Theme'
// ${Theme.};
export const TitleHome = styled.h1`
font-size: 50px;
margin: 0;
color: ${Theme.fontColor.fontC3};`

export const DivContentHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 83vh;
`
export const SubTitleHome = styled.h2`
    color: ${Theme.fontColor.fontC3};
`
export const Text = styled.p`
    margin:30px 0;
    color: ${Theme.fontColor.fontC2};
    font-size: 20px;
`
export const ButtonContact = styled.button`
    background-color: ${Theme.fontColor.fontC3};
    border: 0;
    width: 120px;
    border-radius: 10px;
    padding: 20px;
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

export const DivCardOne = styled.div`
    width: 500px;
    margin-right: 70px;
    display: flex;
   flex-direction: column;
`
export const DivCardTwo = styled.div`
    display: flex;
    width: 500px;
    transition: 0.5s;
    cursor: pointer;
    img{
        width: 100%;
        border-radius: 20px 0 ;
    }
    :hover{
        padding: 10px;
    }
`
export const ChangeColor = styled.span`
    color: #FEFEFE;
`