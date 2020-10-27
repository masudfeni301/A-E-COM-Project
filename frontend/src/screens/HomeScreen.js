import React from 'react'
import {products} from "../Products"
import {Row, Col} from "react-bootstrap"
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
        <h1>Latest Product</h1>
        <Row>
            {products.map((product)=>(
                <Col sm="12" md="6" lg="4" xl="3">
                    <Product key={product._id} product={product}/>
                </Col>
            ))}
        </Row>
            
        </>
    )
}

export default HomeScreen
