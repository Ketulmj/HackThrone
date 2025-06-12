/** @type {import('drizzle-kit').Config} */
import { config } from 'dotenv'
config()

export default {
  schema: './lib/db/schema.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
      url: process.env.DATABASE_URL,
  },
};