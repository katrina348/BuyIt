import React from 'react'
import SellerProducts from '../components/SellerProducts';

const seller = {
  fullName: 'Selly McSellerton',
  email: 'email@email.com',
  products: [
    {
    name:'thing',
    price:'3',
    category:'category',
    city:'city',
    zip:'12345',
    } ,   
  ]
};
const seller1 = {
  fullName: 'Sjhtfhtufy McSellerton',
  email: 'email@email.com',
  products: [
    {
    name:'thi.jbng',
    price:'3',
    category:'category',
    city:'city',
    zip:'12345',
    } , 
  ]
};

const sellers = [seller, seller1]

const Available = () => {
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