import { Schema, model } from 'mongoose'

const data = new Schema({
    testId: {
        type: Schema.Types.ObjectId,
        ref: 'Test'
    },
    caudal: {},
    value: {
        type: String,
        required: true
    }
})

export default model('Data', data)