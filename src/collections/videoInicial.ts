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
      filterOptions: {
        mimeType: {
          in: ['video/mp4', 'video/webm', 'video/ogg'], // 🔸 solo tipos de video
        },
      },
    },
  ],
}
