import React, { useState } from 'react'

/**
 * 11/12/23 currently stop developing
 */

export default function Avatar({setLastSeenTime}: {setLastSeenTime: ()=> void}) {
  // const [lastSeenTime, setLastSeenTime] = useState<string>('10/10/22');
  // setLastSeenTime('10/10/20')
  const [status, setStatus] = useState(['active', 'away', 'off', 'invisible']);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  return (
    <>
    </>
  )
}
