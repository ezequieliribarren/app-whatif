import type { CollectionConfig } from 'payload'

export const Footer: CollectionConfig = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footer',
  },
  admin: {
    useAsTitle: 'direccion', // muestra la dirección como título en el panel
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
        placeholder: 'Ej: Av. Corrientes 1234, Buenos Aires, Argentina',
      },
    },
    {
      name: 'telefono',
      label: 'Teléfono',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Ej: +54 11 1234-5678',
      },
    },
    {
      name: 'mail',
      label: 'Correo electrónico',
      type: 'email',
      required: true,
      admin: {
        placeholder: 'Ej: contacto@flaks.com.ar',
      },
    },
  ],
}
