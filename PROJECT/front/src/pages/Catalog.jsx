import React, {useEffect, useState} from 'react';
import axios from "axios";
import Container from "../components/generic/container/Container";
import Product from "../components/product/Product";
import Banner from "../components/banner/Banner";


const API_URL = 'http://localhost:8000/api/products';


async function fetchProducts() {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(data => {
            console.log(data);
            if (data) {
                setProducts(data);
            }
        });
    }, []);

    return (
        <>
            <Container>
                <Banner></Banner>
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <Product key={index} info={product}></Product>
                    ))
                ) : (
                    <p>Ничего не найдено</p>
                )}

            </Container>
        </>
    );
}

export default Catalog;
