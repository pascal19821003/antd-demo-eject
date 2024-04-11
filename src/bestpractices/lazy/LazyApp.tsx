import React, { Suspense, useState } from 'react'
import { ProductType } from './model'
const ProductDetails = React.lazy(() => import("./ProductDetails"));


const products: ProductType[] = [
    {
        name: "aaaa",
        imageUrl: "https://img.freepik.com/free-photo/young-asian-woman-sitting-bench-near-building-smiling-camera-with-happy-face_197531-22526.jpg?w=1800&t=st=1711293759~exp=1711294359~hmac=91d4e8e56b8e401711eaef609b092caf2478fae3a3d1d89f46ccb58f4b87ba95",
        description: "Asian Girl Woman Images",
        price: 10.2,
        rating: 11
    },
    {
        name: "bbb",
        imageUrl: "https://img.freepik.com/free-photo/young-asian-woman-sitting-bench-near-building-smiling-camera-with-happy-face_197531-22526.jpg?w=1800&t=st=1711293759~exp=1711294359~hmac=91d4e8e56b8e401711eaef609b092caf2478fae3a3d1d89f46ccb58f4b87ba95",
        description: "bbb Asian Girl Woman Images",
        price: 10.2,
        rating: 11
    },
    {
        name: "cccc",
        imageUrl: "https://img.freepik.com/free-photo/young-asian-woman-sitting-bench-near-building-smiling-camera-with-happy-face_197531-22526.jpg?w=1800&t=st=1711293759~exp=1711294359~hmac=91d4e8e56b8e401711eaef609b092caf2478fae3a3d1d89f46ccb58f4b87ba95",
        description: "ccc Asian Girl Woman Images",
        price: 10.2,
        rating: 11
    },
]
export default function LazyApp() {
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    function handleProductClick(product: ProductType) {
        setSelectedProduct(product);
    }

    return (
        <div style={{ margin: '0 auto', width: 800,  }}>
            <div style={{width:300,background: 'lightgreen', display:"inline-block"}}>
                {products.map((product) => (
                    <div key={product.name} onClick={() => handleProductClick(product)} style={{ borderBottom: '1px solid white', cursor: 'pointer' }} >
                        <h2>{product.name}</h2>
                        <img src={product.imageUrl} alt={product.name} style={{ width: 50 }} />
                        <p>Price: {product.price}</p>
                    </div>
                ))}
            </div>
            <div style={{width:300,background: 'lightgreen', display:"inline-block"}}>

            {
                selectedProduct && (
                    <Suspense fallback={<div>loading...</div>}>
                        <ProductDetails product={selectedProduct} />
                    </Suspense>
                )
            }
            </div>
        </div>
    )
}
