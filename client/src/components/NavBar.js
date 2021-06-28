import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link  } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar =()=> {
    const [sellerProducts, setSellerProducts] = useState([])
    
    useEffect(()=>{
      getSellerProducts()
    },[])

    const getSellerProducts = async () => {
      try {
        let res = await axios.get('/api/products')
        console.log(res)
      } catch (err) {
        console.log(err)
        console.log(err.response)
      }
    }
    return (
      <Menu>
          <Link to="/">
            <Menu.Item>
               Available
            </Menu.Item>
          </Link>
      </Menu>
    );
}

export default Navbar;