import React from 'react'
import {products} from "../Product"
import {Row, Col} from "react-bootstrap"

const HomeScreen = () => {
    return (
        <>
        <Row>
            {products.map((product)=>(
                <Col sm="12" md="6" lg="4" xl="3">
                    <h3>{product.name}</h3>
                </Col>
            ))}
        </Row>
            
        </>
    )
}

export default HomeScreen
