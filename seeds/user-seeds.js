const { User } = require('../models');

const userData = [
    {
        username: "heron",
        twitter: "herontwit",
        github: "herongit",
        email: "heron@mail.com",
        password: "heronpassword"
    },
    {
        username: "freshfruit73",
        twitter: "freshfruit73",
        github: "freshfruit73",
        email: "freshfruit73@mail.com",
        password: "freshpassword73"
    },
    {
        username: "ash_k",
        twitter: "k_ashmoney",
        github: "k_ashmoney",
        email: "k_ashmoney@mail.com",
        password: "elite4champ"
    },
    {
        username: "quentin",
        twitter: "quentin99",
        github: "quentin99",
        email: "quentin99@mail.com",
        password: "passward"
    },
    {
        username: "moonman",
        twitter: "moonman90",
        github: "moonman90",
        email: "moonman90@mail.com",
        password: "forthemoon"
    },
    {
        username: "gusteau",
        twitter: "gusteau_tweets",
        github: "gusteau47",
        email: "gusteau@mail.com",
        password: "monkeyfan47"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;