CREATE TABLE "users" (
	"id" varchar(36) PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"firstname" varchar(255),
	"lastname" varchar(255),
	"email" varchar(255) NOT NULL,
	"referralcode" varchar(255) DEFAULT null,
	"price" numeric(8, 2) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
