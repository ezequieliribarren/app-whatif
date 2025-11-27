import type { CollectionConfig } from 'payload'
// 
export const Home: CollectionConfig = {
  slug: 'Home',
  labels: {
    singular: 'Home',
    plural: 'Home',
  },
  admin: {
    useAsTitle: 'titulo',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titulo',
      label: 'Título',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Título de la página de inicio',
      },
    },
    {
      name: 'Subtitulo',
      label: 'Subtítulo',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'Subtitulo de la página de inicio',
      },
    }
  ]
}
