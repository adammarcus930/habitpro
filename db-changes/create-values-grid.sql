create table public.values (
    id              serial primary key,
    importance      integer,
    value           text,
    current_score   integer,
    target_score    integer,
    description     text,
    habit           text
);