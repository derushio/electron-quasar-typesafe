CREATE TABLE `posts` (
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
	`title` text NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (DATETIME('now', 'localtime')) NOT NULL,
	`updated_at` text DEFAULT (DATETIME('now', 'localtime')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `posts_title_unique` ON `posts` (`title`);--> statement-breakpoint
CREATE INDEX `posts___title_idx` ON `posts` (`title`);--> statement-breakpoint
CREATE INDEX `posts___created_at_idx` ON `posts` (`created_at`);--> statement-breakpoint
CREATE INDEX `posts___updated_at_idx` ON `posts` (`updated_at`);