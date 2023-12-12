import React from 'react'
import AvatarLayout from '../avatar/AvatarLayout'

export default function ContainerMessage() {
  return (
    <div>
      <AvatarLayout lastSeenTime={'1'} size='md' imgRounded='lg' status='invisible' name='Yasmine' email={false} />
    </div>
  )
}
