CREATE DATABASE supersite;
\c supersite;
drop table sites;
CREATE TABLE IF NOT EXISTS sites(
   id serial primary key,
   title varchar(200) not null,
   link text not null,
   Background text not null
);

CREATE TABLE IF NOT EXISTS partners(
   id serial primary key,
   LogoImage text not null
);

drop TABLE contactUs;
CREATE TABLE IF NOT EXISTS contactUs(
   id serial primary key,
   name varchar(32) not null,
   PhoneNumber varchar(15) not null,
   Comment text not null
);

drop TABLE claimVoucher;
CREATE TABLE IF NOT EXISTS claimVoucher(
   id serial primary key,
   name varchar(32) not null,
   PhoneNumber varchar(15) not null,
   Comment text not null
);

CREATE TABLE IF NOT EXISTS Workers(
   id serial primary key,
   imageAvatar text not null,
   WorkerName varchar(32) not null,
   WorkerPosition varchar(32) not null
);

ALTER TABLE Workers
ADD COLUMN WorkerName_Uz varchar;
ALTER TABLE Workers
ADD COLUMN WorkerName_En varchar;
ALTER TABLE Workers
ADD COLUMN WorkerPosition_Uz varchar;
ALTER TABLE Workers
ADD COLUMN WorkerPosition_En varchar;

CREATE TABLE IF NOT EXISTS Reviews(
   id serial primary key,
   title varchar(60) not null,
   video text not null
);

CREATE TABLE IF NOT EXISTS Blog(
   id serial primary key,
   TitleRu varchar(60) not null,
   DescriptionRu text not null,
   TitleEn varchar(60) not null,
   DescriptionEn text not null,
   TitleUz varchar(60) not null,
   DescriptionUz text not null
);


