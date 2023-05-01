import React, {useContext} from "react";
import CartContext from "../../context/cart";
import logo from "../../assets/logo.svg"
import { FaShoppingCart} from "react-icons/fa"
import {Container, HeaderContainer, Cart} from "./styles"
import { Link } from "react-router-dom";

function Header () {
    const {setState, state} = useContext(CartContext);
    const totalQuantity = state.cart.reduce((acc, travel) => 
      acc+ travel.quantity, 0
    );
    return (
        <Container>
            <HeaderContainer>
                <Link to="/">
                  <img src={logo} alt="Logo"/>
                </Link>
                <Link to="/cart">
                    <Cart>
                        <div>
                            <span>{totalQuantity}</span>
                        </div>
                        <FaShoppingCart size={36} color="#FFF"/>
                    </Cart>
                </Link>
                
            </HeaderContainer>
        </Container>
    )

}

export default Header;