import { pgTable, varchar, numeric, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const users = pgTable('users', {
  id: varchar('id', { length: 36 }).primaryKey().default(sql`gen_random_uuid()`),
  firstname: varchar('firstname', { length: 255 }),
  lastname: varchar('lastname', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  referralcode: varchar('referralcode', { length: 255 }).default(null),
  price: numeric('price', { precision: 8, scale: 2 }).notNull(),
  created_at: timestamp('created_at', { withTimezone: true }).default(sql`now()`),
});
