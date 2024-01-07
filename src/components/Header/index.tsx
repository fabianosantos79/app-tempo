import logo from './logo.png'
import styled from 'styled-components'

const HeaderEstilizado = styled.header`
    height: 60px;
    /* background-color: rgba(255, 255, 255, 0.2); */
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
    margin: auto;
    padding: 5px 10px;
    nav{
        display: flex;
        justify-content: space-around;
    }
    ul{
        display: flex;
        justify-content: space-between;
    }
    li{
        text-decoration: none;
        list-style: none;
        display: inline-block;
        margin: 0px 20px;
        font-size: 20px;
    }
    img{
        height: 60px;
    }
`

const Header = () => {
  return (
    <HeaderEstilizado>
        <nav>
            <img src={logo} alt="Logo Previsão do Tempo" />
            <menu>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </menu>
        </nav>
    </HeaderEstilizado>
  )
}

export default Header;