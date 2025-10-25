import type { CollectionConfig } from 'payload'

export const Footer: CollectionConfig = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footer',
  },
  admin: {
    useAsTitle: 'direccion',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'direccion',
      label: 'Dirección',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Ej: Av. Corrientes 1234, CABA',
      },
    },
    {
      name: 'mapsLink',
      label: 'Link de Google Maps',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'https://maps.google.com/...',
        description: 'Pegá aquí el enlace completo de Google Maps',
      },
    },
    {
      name: 'telefono',
      label: 'Teléfono',
      type: 'text',
      required: true,
      admin: {
        placeholder: '',
      },
    },
    {
      name: 'mail',
      label: 'Correo electrónico',
      type: 'email',
      required: true,
      admin: {
        placeholder: '',
      },
    },
    {
      name: 'instagram',
      label: 'Instagram',
      type: 'text',
      required: true,
      admin: {
        placeholder: '',
      },
    },
  ],
}
