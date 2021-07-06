const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// get all thoughts at /api/thoughts
router
    .route('/')
    .get(getAllThoughts);

// create thought and add to user
router
    .route('/:userId')
    .post(createThought);

// get one and update thought at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);

// add reactions to thoughts
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// delete reaction
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;