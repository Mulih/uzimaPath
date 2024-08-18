import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        target: {
            type: String,
        },
        frequency: {
            type: String,
        },
        start_date: {
            type: Date,
        },
        end_date: {
            type: Date
        },
        UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
)

// const Goal = mongoose.model('Goal', GoalSchema);

// export default Goal;

export default GoalSchema;