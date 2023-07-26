-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."users" (
    "id"            serial,
    "username"      varchar(50) not null,
    "password"      varchar(255) not null, -- this is a hashed password
    "email"         varchar(100) not null,
    "sign_up_date"  timestamp default now(), -- date/time when the user registered
    "last_activity" timestamp default now(), -- date/time of the user's last activity
    primary key ("id")
);

create table "public"."lobbies" (
    "id"          serial,
    "lobby_name"  varchar(100), -- name/title of the lobby
    "player1_id"  integer,
    "player2_id"  integer,
    "status"      varchar(20) not null, -- e.g., 'waiting', 'in progress', 'finished'
    primary key ("id"),
    foreign key ("player1_id") references "public"."users"("id"),
    foreign key ("player2_id") references "public"."users"("id")
);

create table "public"."games" (
    "id"           serial,
    "lobby_id"     integer,
    "status"       varchar(20) not null, -- e.g., 'in progress', 'finished'
    "winner_id"    integer,
    "board_state"  varchar(255), -- this is a simplified way to represent the board state
    "created_at"   timestamp default now(), -- date/time when the game was created
    "ended_at"     timestamp, -- date/time when the game ended
    primary key ("id"),
    foreign key ("lobby_id") references "public"."lobbies"("id"),
    foreign key ("winner_id") references "public"."users"("id")
);

-- Indexes for improved performance
-- Index on "username" column in the "users" table
create index "idx_users_username" on "public"."users"("username");

-- Index on "email" column in the "users" table
create index "idx_users_email" on "public"."users"("email");

-- Index on "status" column in the "lobbies" table
create index "idx_lobbies_status" on "public"."lobbies"("status");

-- Index on "status" column in the "games" table
create index "idx_games_status" on "public"."games"("status");
