const Database = require("./db");
const createProffy = require("./createProffy");

Database.then(() => {
  // Inserir Dados
  proffyValue = {
    name: "Wanderson Chaves",
    avatar:
      "https://avatars3.githubusercontent.com/u/25234200?s=460&u=97cd00e84e456277c669e8ea9a87e5368ff163f8&v=4",
    whatsapp: "86998614821",
    bio: "Entusiasta das melhores tecnologias de química avançada.",
  };

  classValue = {
    subject: "Química",
    cost: "20",

    // o proffy id vira pelo banco de dados
  };

  classScheduleValue = [
    // class_id vira pelo banco de dados, apos cadastrarmos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  // createProffy(db, { proffyValue, classValue, classScheduleValue });

  // Consultar os dados inseridos
});
