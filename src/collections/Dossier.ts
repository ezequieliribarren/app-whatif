import type { CollectionConfig } from 'payload'

export const Dossier: CollectionConfig = {
  slug: 'dossier',
  labels: {
    singular: 'Dossier',
    plural: 'Dossier',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'archivo',
      label: 'Archivo PDF',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { equals: 'application/pdf' },
      },
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ req, originalDoc, operation }) => {
const existing = await req.payload.find({
  collection: 'dossier' as any, // o as CollectionSlug
  limit: 1,
})

        // Si ya existe un documento distinto → bloquear
        if (
          existing.docs.length > 0 &&
          operation === 'create' || 
          (operation === 'update' && existing.docs[0].id !== originalDoc?.id)
        ) {
          throw new Error('Solo se permite un PDF en esta colección')
        }
      },
    ],
  },
}
