import Data from '../models/data.model'

export const getData = async (req, res) => {
    try {
        const datas = await Data.find()
        res.status(200).json(datas)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createData = async (req, res) => {
    try {
        const data = req.body
        const newData = new Data(data)
        await newData.save()
        res.status(200).json(newData)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}