CREATE TABLE `users` (
	`id` text PRIMARY KEY DEFAULT (
    PRINTF(
      '%s-%s-%s-%s-%s',
      LOWER(HEX(RANDOMBLOB(4))),
      LOWER(HEX(RANDOMBLOB(2))),
      LOWER(HEX(RANDOMBLOB(2))),
      LOWER(HEX(RANDOMBLOB(2))),
      LOWER(HEX(RANDOMBLOB(6)))
    )
  ) NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (DATETIME('now', 'localtime')) NOT NULL,
	`updated_at` text DEFAULT (DATETIME('now', 'localtime')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_name_unique` ON `users` (`name`);--> statement-breakpoint
CREATE INDEX `users___name_idx` ON `users` (`name`);--> statement-breakpoint
CREATE INDEX `users___created_at_idx` ON `users` (`created_at`);--> statement-breakpoint
CREATE INDEX `users___updated_at_idx` ON `users` (`updated_at`);