// src/collections/TeamMembers.ts
import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: {
    singular: 'Miembro del equipo',
    plural: 'Equipo',
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
      label: 'Nombre',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      label: 'Rol',
      type: 'text',
      required: true,
    },

    {
  name: 'order',
  type: 'number',
  label: 'Orden',
  admin: {
    description: 'Número para ordenar manualmente los miembros en el front',
  },
},
    {
      name: 'image',
      label: 'Foto',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
        {
      name: 'detail',
      type: 'textarea',
      label: 'Detalle del miembro',
    },
  ],
}
