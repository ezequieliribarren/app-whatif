// src/globals/VideoInicial.ts
import type { GlobalConfig } from 'payload'

export const VideoInicial: GlobalConfig = {
  slug: 'video-inicial',
  label: 'Video Inicial',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'video',
      label: 'Video',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
