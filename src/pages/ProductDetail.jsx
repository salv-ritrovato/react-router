/* Importing the useParams hook from React Router to retrieve URL parameters */
import { useParams } from "react-router-dom";
/* Importing useState and useEffect React hooks */
import { useState, useEffect } from "react";
/* Importing Axios for API calls */
import axios from "axios";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);


    return (
        <main>
            <div className="container mt-4">
                <h1>{product?.title}</h1>
                <img src={product?.image} alt={product?.title} />
                <p>{product?.description}</p>
                <span>€ {product?.price}</span>
            </div>
        </main>
    );
}