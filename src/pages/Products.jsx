/* Importing React hooks */
import { useState, useEffect } from "react"
/* Importing Axios */
import axios from "axios";

export default function Products() {
    /* Declaring an useState variable where my API of products will go */
    const [products, setProducts] = useState([]);

    /* "fetching" with Axios to print my array of products */
    function storeAPI() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                /* Logging to check if it works */
                console.log(res.data);
                /* Assigning my data to my state variable */
                setProducts(res.data);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }

    useEffect(() => {
        storeAPI(products)
    }, [])

    return (
        <main>
            <section>
                <div className="container mt-3">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        {/* Rendering my product cards through the map method */}
                        {products.map((product) =>
                            <div className="col" key={product.id}>
                                <div className="card h-100">
                                    <img className="card-img-top p-3" src={product.image} alt={product.title} />
                                    <div className="card-body">
                                        <h3 className="card-title mb-2">{product.title}</h3>
                                        <p className='mb-0'><strong>Price:</strong> {product.price}</p>
                                        <p><strong>Description:</strong> {product.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}