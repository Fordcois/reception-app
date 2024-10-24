DROP TABLE IF EXISTS "public"."users";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_user_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "user_id" int4 NOT NULL DEFAULT nextval('users_user_id_seq'::regclass),
    "first_name" varchar,
    "last_name" varchar,
    "job_title" varchar,
    "picture_url" varchar,
    "in_building" bool,
    PRIMARY KEY ("user_id")
);

INSERT INTO "public"."users" ("user_id", "first_name", "last_name", "job_title", "picture_url", "in_building") VALUES
(4, 'Grant', 'Hanley', 'Chief Exectuive Officer', 'https://media-cdn.incrowdsports.com/e2b65931-e9a9-435c-a1f6-b5d3b13039fb.png', 't'),
(5, 'Angus', 'Gunn', 'Head of Marketing', 'https://media-cdn.incrowdsports.com/9f45df2b-a72d-48dc-b399-a37e1a8b302f.png', 't'),
(6, 'Jack', 'Stacey', 'VP of Sales', 'https://media-cdn.incrowdsports.com/952a6c45-2cb7-442c-a05b-bf6b11222fc2.png', 'f'),
(7, 'Shane', 'Duffy', 'Senior Marketing Manager', 'https://media-cdn.incrowdsports.com/27d61570-6ccf-47ed-94ec-55694744280c.png', 't'),
(8, 'Callum', 'Doyle', 'Junior Marketing Assistant', 'https://media-cdn.incrowdsports.com/9d60771e-92bd-48f9-8af0-c1b23b34f62d.png', 't'),
(9, 'Ben ', 'Chrisene', 'Social Media Manager', 'https://media-cdn.incrowdsports.com/4a9926cc-c0bf-4122-bd08-04d4cc969e0c.png', 't'),
(10, 'Josh', 'Sargent', 'Head of Sales', 'https://media-cdn.incrowdsports.com/5bfc4612-2166-435d-b508-e8d74f6bc4b0.png', 't'),
(11, 'Ashley', 'Barnes', 'Sales Manager', 'https://media-cdn.incrowdsports.com/ad16fe00-14ff-4207-9180-4ef8c2334d6f.png', 'f'),
(12, 'Ante', 'Crnac', 'Sales Executive', 'https://media-cdn.incrowdsports.com/33abd0e3-464d-419d-8938-f162050fde82.png', 'f'),
(13, 'Borja', 'Sainz', 'HR Assistant', 'https://media-cdn.incrowdsports.com/f6502647-aa3e-4042-951d-ac0fb259dfb9.png', 't'),
(14, 'Liam ', 'Gibbs', 'Accounts Payable', 'https://media-cdn.incrowdsports.com/ab7a4101-3019-496c-bbf1-5f4703060549.png', 't'),
(15, 'Emiliano', 'Marcondes', 'Director of HR', 'https://media-cdn.incrowdsports.com/6cf84fef-834d-4f9c-bb56-165e8b2181c6.png', 'f'),
(16, 'Christian', 'Fassnacht', 'Office Manager', 'https://media-cdn.incrowdsports.com/6cf84fef-834d-4f9c-bb56-165e8b2181c6.png', 't'),
(17, 'Amankwah', 'Forson', 'Executive Assistant', 'https://media-cdn.incrowdsports.com/7f7d48b0-f7f4-4d09-8de0-37602f9fcc4b.png', 'f'),
(18, 'Jacob', 'Sorensen', 'Project Manager', 'https://media-cdn.incrowdsports.com/fc8bd496-4cf5-424c-8731-55b57a10c62e.png', 't'),
(19, 'Anis Ben', 'Slimane', 'Programme Manager', 'https://media-cdn.incrowdsports.com/a2f43d73-6380-4014-8372-c9ac07bec8eb.png', 't'),
(20, 'Kaide', 'Gordon', 'Chief Technical Officer', 'https://media-cdn.incrowdsports.com/6684c9b9-9473-42e7-bfec-8dfdaa4cc555.png', 't'),
(21, 'Kenny', 'McClean', 'Senior Software Developer', 'https://media-cdn.incrowdsports.com/9a123a9a-032d-4b1c-8db8-f07477069a44.png', 't'),
(22, 'Onel', 'Hernandez', 'Junior Software Developer', 'https://media-cdn.incrowdsports.com/7ba856c8-b4d7-4e73-af48-a89ea3f67ca1.png', 'f'),
(23, 'Oscar', 'Schwartau', 'Facilities Manager', 'https://media-cdn.incrowdsports.com/510b8463-c5d9-4c75-bc46-69423d458ee9.png', 't');
