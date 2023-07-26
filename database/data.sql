-- users table
insert into "users"
   ("username", "email", "password", "sign_up_date", "last_activity")
   values
     ('JohnDoe', 'johndoe@example.com', 'hashed_password_1', now(), now()),
     ('JaneDoe', 'janedoe@example.com', 'hashed_password_2', now(), now()),
     ('Alice', 'alice@example.com', 'hashed_password_3', now(), now());

-- lobbies table
insert into "lobbies"
   ("player1_id", "player2_id", "status")
   values
     (1, 2, 'waiting'), -- JohnDoe (ID: 1) and JaneDoe (ID: 2) are in the lobby
     (2, 3, 'waiting'), -- JaneDoe (ID: 2) and Alice (ID: 3) are in the lobby
     (1, 3, 'waiting'); -- JohnDoe (ID: 1) and Alice (ID: 3) are in the lobby

-- games table
insert into "games"
   ("lobby_id", "status", "winner_id", "board_state", "created_at", "ended_at")
   values
     (1, 'in progress', null, '[]', now(), null), -- Game in progress in lobby 1
     (2, 'in progress', null, '[]', now(), null), -- Game in progress in lobby 2
     (3, 'in progress', null, '[]', now(), null); -- Game in progress in lobby 3
