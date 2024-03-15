import Test from '../models/test.model.js'

export const getTests = async (req, res) => {
    try {
        const tests = await Test.find()
        res.status(200).json({status: true, message: "Tests fetched successfully!", data: tests})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const createTest = async (req, res) => {
    try {
        const newTest = await new Test(req.body)
        await newTest.save()
        res.status(201).json({status: true, message: "Test created successfully!", data: newTest})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const updateTest = async (req, res) => {
    try {
        const { id } = req.params
        const testUpdated = await Test.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({status: true, message: "Test fetched successfully!", data: testUpdated})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const deleteTest = async (req, res) => {
    try {
        const { id } = req.params
        await Test.findByIdAndDelete(id)
        res.status(200).json({status: true, message: "Test deleted successfully!"})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}