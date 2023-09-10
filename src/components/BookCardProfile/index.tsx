import Image from 'next/image'
import { StartRating } from '../StarRating'
import { Box } from '../UI/Box'
import { SmallText, Title } from '../UI/Typography'
import { Data, Header } from './styles'

export function BookCardProfile() {
  return (
    <div>
      <Data size="sm">Há 2 dias</Data>
      <Box>
        <Header>
          <Image
            src="/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
            width={108}
            height={152}
            alt="Imagen do Livro"
          />
          <div>
            <div>
              <Title>Entendendo Algoritmos</Title>
              <SmallText>Aditya Bhargava</SmallText>
            </div>

            <StartRating rating={4} />
          </div>
        </Header>
        <p>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque
        </p>
      </Box>
    </div>
  )
}
