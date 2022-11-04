import styled from 'styled-components'

export const Title = styled.h1`
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1.7rem;

 color: white;
 padding-top: 1rem;
 margin-bottom: 1.2rem;

`

export const Container = styled.ul`
 display: flex;
 justify-content: center;
 align-items: center;

`

export const Content = styled.ul`
 @media (min-width: 768px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
 }
`

export const Card = styled.div`
 border: 3px;
 border-radius: 10px;
 background-color: #05050d;
 color: black;
 max-width: 30rem;
 padding: 2rem;
 margin-bottom: 1rem;
 align-items: center;
 text-align: center;

 h2 {
  color: #1a1aff;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.7rem;
 }

 p {
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 1.3rem;
 }

 .span {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  align-items: center;

  h4 {
    color: #0ad7f2;
  }

  h5 {
    color: #e8e409;
  }
 }

 button {
  border: 1px solid #5014db;
  border-radius: 5px;
  padding: 1rem;
  background: #5014db;
  color: #fff;
  margin: 0 7px 7px 0;


  &:hover {
    background: #4614ba;
  }
 }
`