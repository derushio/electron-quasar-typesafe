CREATE TABLE IF NOT EXISTS "user_sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"access_token_hash" text NOT NULL,
	"access_token_expire_at" timestamp NOT NULL,
	"reset_token_hash" text NOT NULL,
	"reset_token_expire_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"passwordHash" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_sessions_access_token_hash_index" ON "user_sessions" ("access_token_hash");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_sessions_access_token_expire_at_index" ON "user_sessions" ("access_token_expire_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_sessions_reset_token_hash_index" ON "user_sessions" ("reset_token_hash");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_sessions_reset_token_expire_at_index" ON "user_sessions" ("reset_token_expire_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_sessions_created_at_index" ON "user_sessions" ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_sessions_updated_at_index" ON "user_sessions" ("updated_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_email_index" ON "users" ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_passwordHash_index" ON "users" ("passwordHash");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_created_at_index" ON "users" ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_updated_at_index" ON "users" ("updated_at");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
