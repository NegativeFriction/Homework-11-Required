create database friendsdb;
use friendsdb;
create table friends(
id int(10) auto_increment not null,
primary key (id),
name varchar(50) not null,
picture text not null,
q1 int(2),
q2 int(2),
q3 int(2),
q4 int(2),
q5 int(2),
q6 int(2),
q7 int(2),
q8 int(2),
q9 int(2),
q10 int(2),
total int(3)
);

insert into friends (name,picture,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,total) values("Fat Bastard", "https://pbs.twimg.com/profile_images/538099133836312576/5OCeoys2_400x400.jpeg",5,5,5,5,5,5,5,5,5,5,10),
("Francis","https://pbs.twimg.com/profile_images/838233247/image_400x400.jpg",1,1,1,1,1,1,1,1,1,1,10),("Neutral Ambassador","https://i.kym-cdn.com/entries/icons/original/000/008/071/Screen_shot_2011-12-25_at_4.52.05_AM.png",3,3,3,3,3,3,3,3,3,3,30);