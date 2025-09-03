import type { CollectionConfig } from 'payload'

export const SelectedClients: CollectionConfig = {
    slug: 'selected-clients',
    labels: {
        singular: 'Clientes Seleccionados',
        plural: 'Selected Clients',
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
        }
    ],
}
