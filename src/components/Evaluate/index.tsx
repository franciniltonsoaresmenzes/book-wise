import { FormEvent, useState } from 'react'
import { Avatar } from '../Avatar'
import { TextArea } from '../TextArea'
import { Box } from '../UI/Box'
import { Text } from '../UI/Typography'
import { RatingStars } from './component/RatingStars'
import { AvatarHeader, Footer, Header } from './styles'
import { Button } from '../UI/Button'
import { Check, X } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { queryClient } from '@/lib/react-query'

type Props = {
  bookId: string
  onClose: () => void
}

export function Evaluate({ bookId, onClose }: Props) {
  const [description, setDescription] = useState<string>('')
  const [rate, setRate] = useState<number>(0)

  const { data: session } = useSession()

  const user = session?.user

  const { mutateAsync } = useMutation({
    mutationKey: ['rate'],
    mutationFn: async () => {
      await api.post(`/books/rate/${bookId}`, {
        description,
        rate,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['book', bookId])
      queryClient.invalidateQueries(['books'])
      onClose()
    },
  })

  async function handleCreateRate(event: FormEvent) {
    event.preventDefault()
    await mutateAsync()
  }

  if (!user) {
    return
  }

  return (
    <Box as="form" onSubmit={handleCreateRate}>
      <Header>
        <AvatarHeader>
          <Avatar image={user.avatar_url} />
          <Text>{user.name}</Text>
        </AvatarHeader>
        <RatingStars setRating={setRate} />
      </Header>
      <TextArea
        limit={450}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Footer>
        <div>
          <Button weight="small" onClick={onClose}>
            <X size={24} />
          </Button>
          <Button weight="small" disabled={!description.length}>
            <Check size={24} />
          </Button>
        </div>
      </Footer>
    </Box>
  )
}
