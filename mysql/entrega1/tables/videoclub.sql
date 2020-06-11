create database videoclub;
use videoclub;
DROP DATABASE videoclub;
create table film (
	id int primary key auto_increment,
	name varchar(200) not null,
    description varchar(255) not null,
    PEGI int not null,
    cover varchar(256) not null,
    directors varchar(20) not null,
    actors varchar(20) not null
    );
    
create table partner (
    id int primary key auto_increment,
    name varchar(20)not null,
    DNI int not null,
    phone int not null,
    birthdate date not null,
    email varchar(30) not null
    );

create table provider (
	id int primary key auto_increment,
    name varchar(20) not null,
    phone int not null,
    email varchar(30) not null,
    DNI int not null
    );
    
create table copy (
	id int primary key auto_increment,
    sort enum('VHS', 'DVD'),
    rate enum('estreno', 'estandar', 'antiguas'),
    id_film int,
    id_partner int,
    constraint fk_provider foreign key(id_provider) references provider(id),
    constraint fk_film foreign key (id_film) references film(id)
    );
    
create table rental (
	return_date date not null,
    rating int,
    comment varchar(255) not null,
	id_partner int,
    id_copy int,
    constraint fk_partner_alquiler foreign key (id_partner) references partner(id),
    constraint fk_copy_alquiler foreign key (id_copy) references copy(id)
);

