import styled from "styled-components";
import {Theme} from "../../Theme";

// ${Theme.};

export const Title = styled.h2`
    font-size: 45px;
    margin: 0;
    padding:30px 0;
    color: ${Theme.fontColor.fontC3};
`  
export const DivContent = styled.div`
    width: 1200px;
    margin: 0 auto;
`   
export const DivHeaderPage = styled.div`
    
`
    
export const DivTable = styled.div`
    margin: 20px 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 630px;
    border-radius: 10px;
    background-color:${Theme.colors.background3}; 
    a{
        color: white;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
`    
export const Table = styled.table`
    border-collapse: collapse;
    text-align: left;
    width: 100%;
`   
export const TableTd = styled.td`
    color: ${Theme.fontColor.fontC4};
    font-size: 20px;
    text-align: ${props => (props.textAlign)};
    padding: 15px 0 15px 4px;
    border-top:1px solid ${Theme.fontColor.fontC5};
;
`   
export const TableTh = styled.th`
    color: ${Theme.fontColor.fontC1};
    text-align: ${props => (props.textAlign)};
    font-size: 25px;
    padding: 20px 0 5px 4px  ;
`  
export const TableButtons = styled.button`
    font-weight: bold;
    background-color: #327c96;
    background-color: ${props => (props.color)};
    cursor: pointer;
    color: black;
    width: 80px;
    padding: 7px 4px;
    border-radius: 4px;
    font-size: 15px;
    border:0;
    margin-left: 6px;
    transition: 0.5s;
    :hover{
        color:white;
    }
`  
export const SubTitle = styled.h3`
    color: ${props => (props.color)};
   font-size: 30px;
`
export const LinkTo = styled.h5`
    color: ${props => (props.color)};
    font-size: 20px;
`
export const DivPaginacao = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between; 
   margin: 0 10px;
    margin-bottom: 11px;
`
export const ButtonsPages = styled.div`
  border: 1px solid white;
  padding: 4px 20px;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${Theme.fontColor.fontC5};
  :hover{
      background-color: white;
      color: ${Theme.fontColor.fontC5};;
  }
`