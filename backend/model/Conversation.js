const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema(
    {
        members:{
            type: Array
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Coversation", ConversationSchema);