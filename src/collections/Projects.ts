import type { CollectionConfig } from 'payload'
import slugify from 'slugify'; // npm install slugify


export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      async ({ data }) => {
        if (data?.title && !data?.slug) {
          data.slug = slugify(data.title, { lower: true, strict: true });
        }
        return data;
      }
    ]
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

    {
      name: 'text',
      type: 'richText',
      label: 'Descripción del proyecto',
    },
    {
      name: 'detail',
      type: 'richText',
      label: 'Detalle técnico u observaciones',
    },
  ],
}
