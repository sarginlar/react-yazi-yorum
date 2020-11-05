exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("post")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("post").insert([
        {
          title: "Rifat sargın",
          content: "Bu kanalda React konulari ele alinmaktadir. Takip ettiginiz icin tesekkur ederiz.",
          user_id: 1,
        },
        {
          title: "Başkası",
          content: "Bizimki.",
          user_id: 1,
        },
        {
          title: "Redux bir state yonetim sistemidir",
          content: "Redux sayesinde karmasik state islemleri tek bir merkezden yonetilebilir.",
          user_id: 1,
        },
      ]);
    });
};
