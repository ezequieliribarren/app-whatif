import type { CollectionConfig } from 'payload'
import slugify from 'slugify' // npm install slugify

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'featured', 'order', 'date'], // columnas visibles en el panel admin
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      async ({ data }) => {
        // genera slug automáticamente si no existe
        if (data?.title && !data?.slug) {
          data.slug = slugify(data.title, { lower: true, strict: true })
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Proyecto destacado',
      defaultValue: false,
    },
        {
      name: 'apagar',
      type: 'checkbox',
      label: 'Tildar para apagar proyecto (no se mostrará en la web)',
      defaultValue: false,
    },

    // 👉 Campo para definir el orden manual de los proyectos destacados
    {
      name: 'order',
      label: 'Orden destacado',
      type: 'number',
      defaultValue: 0,
      admin: {
        condition: (data) => data.featured === true, // solo visible si está destacado
        description: 'Define el orden manual de los proyectos destacados (menor = primero)',
      },
    },

    {
      name: 'date',
      type: 'date',
      label: 'Fecha del proyecto',
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'projectCategories',
      hasMany: true,
    },
    {
      name: 'types',
      type: 'relationship',
      relationTo: 'projectTypes',
      hasMany: true,
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'imagenDestacada',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'drawings',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'renders',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'videos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'models3D',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text',
        },
      ],
    },

    // 🟢 Descripción en español
    {
      name: 'text',
      type: 'richText',
      label: 'Descripción del proyecto (Español)',
    },

    // 🟦 Descripción en inglés
    {
      name: 'text_en',
      type: 'richText',
      label: 'Project Description (English)',
      admin: {
        description: 'Versión en inglés del texto descriptivo del proyecto.',
      },
    },

    // 🟣 Campo de título editable para el bloque de detalle técnico
    {
      name: 'campoDetail',
      type: 'text',
      label: 'Nombre del bloque de detalle técnico',
      admin: {
        placeholder: 'Ej: Detalle técnico, Especificaciones, Observaciones...',
        description: 'Define el nombre o título que aparecerá sobre el contenido de detalle técnico.',
      },
    },

    // 🟣 Detalle técnico u observaciones
    {
      name: 'detail',
      type: 'richText',
      label: 'Detalle técnico u observaciones',
    },
    {
      name: 'agency',
      type: 'richText',
      label: 'Detalle de agencia',
    },
  ],
}
