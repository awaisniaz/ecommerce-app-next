import React from 'react'
import { useRouter } from 'next/router'
const ProductDetails = () => {
    const router = useRouter()
    return (
        <h1>Product Deatils {router.query?.id}</h1>
    )
}

export default ProductDetails
