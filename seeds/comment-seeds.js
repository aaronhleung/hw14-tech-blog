const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "cool"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "crypto has 'died' like 6 times in the past year bud"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "epic"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "tl;dr"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "that's great news"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "why bother posting this?"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "great moves, keep it up!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "eh"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;