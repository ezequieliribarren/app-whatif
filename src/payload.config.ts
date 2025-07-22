// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { ProjectCategories } from './collections/projectCategories'
import { ProjectTypes } from './collections/proyectTypes'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
collections: [Users, Media, Projects, ProjectCategories, ProjectTypes],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
db: mongooseAdapter({
  url: process.env.MONGODB_URI || '',
}),
  sharp,
cors: ['http://localhost:3001'],


  plugins: [
    // payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
