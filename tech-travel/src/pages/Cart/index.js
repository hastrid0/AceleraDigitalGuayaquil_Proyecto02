import React from "react";
import { Container, ContainerList, TravelItem, Info, Quantity, Subtotal } from "../Cart/styles";
import { MdDelete } from "react-icons/md" 

function Cart() {
    return (
        <Container>
          <ContainerList>
            <TravelItem>
              <img src="" alt="titulo del viaje"/>
              <Info>
                  <p>titulo</p>
                  <strong>Precio</strong>
              </Info>
              <Quantity readOnly type="number" value={1} />
                  <Subtotal>
                      <p>200</p>
                      <button type="button">
                        <MdDelete size={24} color="$0676d9" />
                      </button>
                  </Subtotal>
            </TravelItem>
          </ContainerList>
        </Container>
    )
}
export default Cart;