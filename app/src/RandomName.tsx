import React, { useState, useEffect } from 'react'

const RandomName = () => {
  const [name, setName] = useState<string | null>(null)
  const [error, setError] = useState<boolean | string>(false)

  useEffect(() => {
    async function getName() {
      const response: any = await fetch('http://localhost:8080')

      // Catch error
      if (!response.ok) {
        setError(response.statusText)
        return
      }

      // Handle successful response
      const { name } = await response.json()
      setName(name)
    }

    getName()
  }, [])

  if (error) {
    return <p className='error'>{error}</p>
  }

  return (
    <div>
      {name ? (
        <p>
          How about <strong>{name}</strong>?
        </p>
      ) : (
        'Loading the perfect name for your project...'
      )}
    </div>
  )
}

export default RandomName
