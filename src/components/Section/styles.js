import styled from 'styled-components';
import image from '../../images/wallpaper-florest.png';

export const Container = styled.div`
  background-image: url(${image});
  padding: 20px;
  height: 697px;
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

export const Title =  styled.h1`
  font-family: 'Paytone One', sans-serif;
  font-size: 56px;
  font-weight: bold;
  color: #FFCC01;
  -webkit-text-stroke: 0.1rem #3264AF;
  margin-bottom: 40px;
`
