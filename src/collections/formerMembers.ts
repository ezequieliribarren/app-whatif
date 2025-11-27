// src/collections/TeamMembers.ts
import type { CollectionConfig } from 'payload'

export const FormerMembers: CollectionConfig = {
    slug: 'former-members',
    labels: {
        singular: 'Antiguos miembros del equipo',
        plural: 'Old Members',
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
            name: 'link',
            label: 'Link',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            label: 'Foto',
            type: 'upload',
            relationTo: 'media',
            required: false,
        }
    ],
}
