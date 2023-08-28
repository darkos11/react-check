import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Carte = () => {
  return (
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="https://media.routard.com/image/02/9/canaries-el-hierro-la-frontera.1598029.w430.jpg" />
      <Card.Body>
        <Card.Title>Premiere destination</Card.Title>
        <Card.Text>
          Lorem ipsum ipsum lorem ipsumlorem Lorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumlorem.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://media.routard.com/image/02/9/canaries-el-hierro-la-frontera.1598029.w430.jpg" />
      <Card.Body>
        <Card.Title>Deuxième destination</Card.Title>
        <Card.Text>
        Lorem ipsum ipsum lorem ipsumlorem Lorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumlorem.

        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://media.routard.com/image/02/9/canaries-el-hierro-la-frontera.1598029.w430.jpg" />
      <Card.Body>
        <Card.Title>Troisième destination</Card.Title>
        <Card.Text>
        Lorem ipsum ipsum lorem ipsumlorem Lorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumloremLorem ipsum ipsum lorem ipsumlorem.

        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  )
  

}

export default Carte
