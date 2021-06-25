import React from 'react'
import { Card, Segment, Table } from 'semantic-ui-react'

const SellerProducts = ({fullName, email, products}) => (
  <>
  <Segment>
    <Card>
    <Card.Content>
      <Card.Header>{fullName}</Card.Header>
      <Card.Meta>{email}</Card.Meta>
    </Card.Content>
  </Card>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Prod. Name</Table.HeaderCell>
          <Table.HeaderCell>Prod. Price</Table.HeaderCell>
          <Table.HeaderCell>Prod. Category</Table.HeaderCell>
          <Table.HeaderCell>City</Table.HeaderCell>
          <Table.HeaderCell>Zip</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

    <Table.Body>
      {products.map((p)=> (
      <Table.Row>
        <Table.Cell>{p.name}</Table.Cell>
        <Table.Cell>{p.price}</Table.Cell>
        <Table.Cell>{p.category}</Table.Cell>
        <Table.Cell>{p.city}</Table.Cell>
        <Table.Cell>{p.zip}</Table.Cell>
      </Table.Row>
      ))}
    </Table.Body>
  </Table>
</Segment>
</>
)

export default SellerProducts;
