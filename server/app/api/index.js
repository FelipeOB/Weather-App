var api  = {}
const needle = require('needle')
const url = require('url')

api.getWeatherApiContent = async function(req, res) {
    try {
        const params = new URLSearchParams({
            [process.env.WEATHER_API_NAME]: process.env.WEATHER_API_VALUE,
            ...url.parse(req.url, true).query
        })
        const apiRes = await needle('get', `${process.env.WEATHER_BASE_URL}?${params}`)
        const data = apiRes.body
        res.json(data)
    } catch (error) {
        res.status(500).json({error})
    }
}
module.exports = api;