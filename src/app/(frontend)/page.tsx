import { headers as getHeaders } from 'next/headers.js'
import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="home">
      <div className="content">
        <img className='img-logo'
          alt="Logo"
          src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1753790361/logo_f24idr.png"
        />
        <h2>Construimos imaginarios colectivos que configuran nuestro cotidiano.</h2>
        {user && <h1>Bienvenido, {user.email}</h1>}

        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ir al panel
          </a>
        </div>
      </div>
    </div>
  )
}
