import { FC } from "react"
import { Card } from "react-bootstrap"

interface ItemProduct{
    precio: number,
    imagen: string,
    nombre: string,
}
interface IPropsListProduct{
    arraItems : ItemProduct[]
}
export const ListProduct: FC<IPropsListProduct> = ({arraItems}) => {
  return (
    <div className="p-1 m-3 border rounded d-grid gap-2"
    style={{gridTemplateColumns: 'repeat(3, 1fr)', justifyItems: 'center', alignItems: 'center'}}>
        {arraItems.map((el, i) =>(
            <Card key={i} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.imagen} />
            <Card.Body>
              <Card.Title>{el.nombre}</Card.Title>
              <Card.Text>
                ${el.precio}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
        }
      
    </div>
  )
}

export default ListProduct
