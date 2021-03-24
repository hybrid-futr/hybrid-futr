#March 2021:

CREATE DATABASE web_app;

USE web_app;

CREATE TABLE users (
    emails VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (emails) VALUES
('ElManana@gmail.com'), ('not_today_satan@rocketmail.com');
