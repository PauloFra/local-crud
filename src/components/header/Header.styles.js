import styled from 'styled-components'
import { Theme } from '../../Theme'

export const HeaderComponent = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-around;
    font-size:23px;
    padding: 10px 0;
    background-color:${Theme.colors.background3} ;
    a{
        font-weight: bold;
        text-decoration: none;
        color: ${Theme.fontColor.fontC4} ;
    }
`
export const ButtonHeader = styled.button`
    background-color: transparent;
    cursor: pointer;
    padding: 11px;
    font-size: 20px;
    border-radius: 10px;
    color: ${Theme.fontColor.fontC4} ;
    border: 1px solid  ${Theme.fontColor.fontC4};
    transition: 0.5s;
    :hover{
        background-color:${Theme.fontColor.fontC4};
        color:${Theme.colors.background3};
    }
`
export const Li = styled.li`
    font-size: 20px;
    margin-left: 20px;
    display:inline;
`

export const Ul = styled.ul`
    display: contents;
`
