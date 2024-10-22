CREATE DATABASE reception

CREATE TABLE "users" (
    "user_id" VARCHAR(255) PRIMARY KEY,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "job_title" VARCHAR(255),
    "in_building" BOOLEAN,
);