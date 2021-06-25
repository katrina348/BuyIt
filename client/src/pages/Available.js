import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SellerProducts from '../components/SellerProducts';

// {"first_name":"Arlene",
// "last_name":"Grimes",
// "sold":false,
// "email":"chong@streich.name",
// "seller_id":1,
// "name":"Elderberry",
// "price":3.0,
// "category":"Miniatures",
// "product_id":1,
// "city":"Port Raleigh",
// "zip":"92426",
// "id":null},

const Available = () => {
  const [sellers, setSellers] = useState([])
  useEffect(()=>{
    getSellerProducts()
  },[])

    const normalizeData = (sellerProducts) => {
      //get unique ids of sellers
      const uniqSellerIDS = [...new Set(sellerProducts.map(p=> p.seller_id))]
      const sellersData = []
      uniqSellerIDS.forEach(id => {
        let products = sellerProducts.filter(sp => sp.seller_id === id)
        let {seller_id, first_name, last_name, email} = products[0]

        const cleanedProducts = products.map(p => {
          return{ name: p.name,
                  price: p.price,
                  category: p.category,
                  city: p.city,
                  zip: p.zip
                }
        })

        sellersData.push({
         seller_id, fullName: `${first_name} ${last_name}`,
         email, 
         products: cleanedProducts
        })
      })
      console.log(sellersData)
      setSellers(sellersData)
    }
    const getSellerProducts = async()=>{
      try {
        let res = await axios.get('/api/products')
        normalizeData(res.data)
      }catch (err) {
        console.log(err)
      }
  }
  return (
    <>
    <h1>Available</h1>
    {sellers.map(s => (
    <SellerProducts {...s}/>
  ))
  }
    </>
  )
}

export default Available