const Database = require("./db");
const createProffy = require("./createProffy");

Database.then(async (db) => {
  // Inserir Dados
  proffyValue = {
    name: "Wanderson Chaves",
    avatar:
      "https://avatars3.githubusercontent.com/u/25234200?s=460&u=97cd00e84e456277c669e8ea9a87e5368ff163f8&v=4",
    whatsapp: "86998614821",
    bio: "Entusiasta das melhores tecnologias de química avançada.",
  };

  classValue = {
    subject: 1,
    cost: "20",

    // o proffy id vira pelo banco de dados
  };

  classScheduleValues = [
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

  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // Consultar os dados inseridos

  // todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys");
  // console.log(selectedProffys);

  // consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `);
  // console.log(selectClassesAndProffys);

  // o horario que a pessoa trabalha, por exemplo, e das 8h - 18h
  // o horario do time_from (8h) precisa ser menor ou igual ao horário solicitado
  // o time_to precisa ser maior
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = 0
    AND class_schedule.time_from <= '1300'
    AND class_schedule.time_to > '1300'
  `);
  console.log(selectClassesSchedules);
});
