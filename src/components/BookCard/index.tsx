import Image from 'next/image'
import { Avatar } from '../Avatar'
import { StartRating } from '../StarRating'
import { Box } from '../UI/Box'
import { Text } from '../UI/Typography'
import { HeaderCard, ContentCard, DescriptionBook, Author } from './styles'

export function BookCard() {
  return (
    <Box>
      <HeaderCard>
        <Author>
          <Avatar image="null" />
          <div>
            <Text>Jaxson Dias</Text>
            <Text as="span">Hoje</Text>
          </div>
        </Author>
        <StartRating rating={4} />
      </HeaderCard>

      <ContentCard>
        <Image
          src="/images/books/entendendo-algoritmos.png"
          width={108}
          height={152}
          alt="Imagen do Livro"
        />
        <div>
          <div>
            <Text>O Hobbit</Text>
            <Text as="span">J.R.R. Tolkien</Text>
          </div>
          <DescriptionBook>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh Lorem ipsum dolor sit amet, officia
            excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi
            Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
            excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident.
            Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
            sunt ex occaecat reprehenderit commodo officia dolor Lorem duis
            laboris cupidatat officia voluptate. Culpa proident adipisicing id
            nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis.
          </DescriptionBook>
        </div>
      </ContentCard>
    </Box>
  )
}
