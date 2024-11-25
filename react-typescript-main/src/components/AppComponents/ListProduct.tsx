import { FC } from "react";
import { Card, Row, Col } from "react-bootstrap";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

interface IPropsListProducts {
  arrItems: ItemProduct[];
}

export const ListProduct: FC<IPropsListProducts> = ({ arrItems }) => {
  return (
    <div className='p-4 m-3 border rounded'>
      <Row className="g-3"> {/* g-3 para espacio entre tarjetas */}
        {arrItems.map((el, i) => (
          <Col key={i} sm={6} md={4} lg={3}> {/* Ajusta el tamaño de columna según el dispositivo */}
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={el.imagen} />
              <Card.Body>
                <Card.Title>{el.nombre}</Card.Title>
                <Card.Text>
                  Precio: ${el.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
