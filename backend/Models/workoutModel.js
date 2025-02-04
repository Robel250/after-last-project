import mongoose from 'mongoose';

const WorkoutSchema = mongoose.Schema(
    {
      
        excersize: {
            type: String,
            required: true,
        },
        load: {
            type: Number,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
       userId: {
                   type: mongoose.Schema.Types.ObjectId,
                   ref: "user",
                   required: true, 
               }
       

    },
    {
        timestamps: true,
    }
);

export const Workout = mongoose.model('workout',  WorkoutSchema );
