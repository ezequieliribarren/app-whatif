import type { CollectionConfig } from 'payload'

export const ProjectCategories: CollectionConfig = {
  slug: 'projectCategories',
  labels: {
    singular: 'Categoría',
    plural: 'Categorías',
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
