import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Select, Table } from 'semantic-ui-react'

const category = [{ category: 'hobby'}, {category: 'other Hobby'}]
const Categories = (props) => {
  const [categories, setCategories] = useState ([])
  const [categoryProducts, setCategoryProducts] = useState([])
  useEffect(()=>{
    getCategories()
  },[])
  
  const getCategories = async()=>{
    try{
      let res = await axios.get('/api/categories')
      setCategories(res.data)
    } catch(err) {
      console.log(err)
      console.log(err.response)
    }
  
  const normalizeCategoryData = () => {
    return category.map((c) => {
      return { key: c.category, value: c.category.toLowerCase, text: c.category};
    });
  };
  
  const handleChange = async (e, { value }) => {
    // alert(value);
    try{
      let res = await axios.get(`/api/catgories/${value}`)
      setCategoryProducts(res.data)
      setCategoryProducts(category)
      console.log(res)
    } catch (err){

    }
  };
  const categoryOptions = normalizeCategoryData();
  
  return(
    <div>
      <h1>Categories</h1>
      <Select
        onChange={handleChange}
        placeholder="Select Category"
        options={categoryOptions}
      />
      
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prod. Name</Table.HeaderCell>
            <Table.HeaderCell>Prod. Price</Table.HeaderCell>
            <Table.HeaderCell>Prod. Category</Table.HeaderCell>
          </Table.Row>
          </Table.Header>
          <Table.Body>products</Table.Body>
      </Table>
    </div>
  )
}}
export default Categories