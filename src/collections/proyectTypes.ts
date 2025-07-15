import type { CollectionConfig } from 'payload'

export const ProjectTypes: CollectionConfig = {
  slug: 'projectTypes',
  labels: {
    singular: 'Tipo',
    plural: 'Tipos',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,  // <-- permití lectura pública
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
