import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Card, Divider, Icon, Select } from 'semantic-ui-react'

const FindProducts = (props)=> {
    const [sellersOptions, setSellersOptions] = useState([])
    const [buyerOptions, setBuyerOptions] = useState(null)
    const [products, setProducts] = useState(null)
    useEffect(()=>{
        getSellers()
    },[])

    const getSellers = async() => {
        let res = await axios.get('/api/sellers')
        console.log(res)
        const sellers = res.data.map( s => {
            return {key:s.id, value:s.id, text:`${s.first_name} ${s.last_name}`}
        })
        setSellersOptions(sellers)
    }
    const handleSellerChanged = async (e, {value}) =>{
        let res = await axios.get(`/api/sellers/${value}`)
        console.log(res)
        const buyers = res.data.map( b => {
            return {key:b.id, value:b.id, text:`${b.first_name} ${b.last_name}`}
        })
        setBuyerOptions(buyers)
    }
    const handleBuyerChanged = async (e, {value}) =>{
        let res = await axios.get(`/api/buyers/${value}`)
        console.log(res)
        setProducts(res.data)
    }

    const renderProducts = ()=> {
       return products.map(p => {
           return (
            <Card
            image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
            header={p.price}
            meta={p.seller_name}
            />
              )}
           )
       }
    }
    return(
        <div>
            <h1>Products</h1>
            <Select 
              options={sellersOptions} 
              onChange={handleSellerChanged}
              />
              {buyerOptions &&
              <>
              <Divider />
                  <Select 
                  options={buyerOptions} 
                  onChange={handleBuyerChanged}
                  />
            </>
              }
              {  products && 
                 products.length === 0 && 
                <p>No Available products for your desired categories and price</p>
              }
              { products &&
               <>
                <Divider />
                 <Card.Group>
                  {renderProducts()}
                 </Card.Group>
                </>
               }
        </div>
    )
export default FindProducts