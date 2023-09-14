import styled from "styled-components";
import photo from './assets/Rectangle1.png'

export const App = () => {

    return (
        <>
            <Card>
                <Image src={photo} alt='photo'/>
                <Content>
                    <Title>Headline</Title>
                    <Text>
                        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                    </Text>
                    <Button>See more</Button>
                    <Button variant='outlined'>Save</Button>
                </Content>
            </Card>
        </>
    )
}

export const Card = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 20px 5px #0000001A;
`
export const Content = styled.div`
  //padding: 10px;
  padding: 10px 35px 10px 10px;
  justify-content: space-between;
  button {margin-top: 10px}
  button + button {
    margin-left: 12px
  }
;
`

export const Image = styled.img`
  border-radius: 10px;
  width:100%;
`
export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0;
`

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #ABB3BA;
  
`
type ButtonProps = {
    variant?: 'primary' | 'outlined'
}
export const Button = styled.button<ButtonProps>`
  width: 86px;
  height: 30px;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 0;
  background-color: ${props => props.variant === 'outlined' ? 'white': '#4E71FE' };
  border: ${props => props.variant === 'outlined' ? '2px solid #4E71FE': 'none' };
  color: ${props => props.variant === 'outlined' ? '#4E71FE': 'white' };
  border-radius: 5px;
`
