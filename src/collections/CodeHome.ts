import type { CollectionConfig } from 'payload';

export const CodeHome: CollectionConfig = {
  slug: 'code-home',
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
      name: 'subtitulo',
      label: 'Subtítulo',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'Subtítulo de la página de inicio',
      },
    },
  ],
};
