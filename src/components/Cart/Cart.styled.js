import styled from 'styled-components';


const CartCountainer = styled.div`
  margin: auto;
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .Empty{
    font-size: 50px;
    margin: 0 auto;
    margin-bottom: 400px;
    margin-top: 70px;
  }
`

const InsectImage = styled.img`
  border-radius: 7px;
  width: 200px;
  height: 150px;
`

const CardInCart = styled.div`
  width: 700px;
  height: 180px;
  border-radius: 7px;
  box-shadow: 0 2px 15px 5px darkgreen;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  h3 {
    width: 80px;
    margin-left: 40px;
  }
`

const Price = styled.div`
  width: 100px;
  margin-left: 30px;
`

const Buttons = styled.div`
  margin-right: 15px;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 40px;
  p {
    width: 35px;
    text-align: center;
  }
  button {
    width: 43px;
    height: 43px;
    font-size: 30px;
    background-color: #979797;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    border: 1px solid black;
  }
`

const DivForPrice = styled.div`
  width: 350px;
  height: 80px;
  margin-top: 25px;
  margin-bottom: 120px;
  border-radius: 30px;
  white-space: nowrap;
  background-color: darkgreen;

  p {
    color: yellow;
    margin: auto, auto;
  }
`

export { CartCountainer, InsectImage, Price, CardInCart, Buttons, DivForPrice };