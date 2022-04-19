export default function Fetch(req, res) {
    res.json({ 
        message: 'DATA FETCHED',
        data: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@doe.com',
                password: 'casdcg45y546u56yj'
            },
            {
                id: 2,
                name: 'John Doe',
                email: 'john@doe.com',
                password: 'casdcg45y546u56yj'
            },
            {
                id: 3,
                name: 'John Doe',
                email: 'john@doe.com',
                password: 'casdcg45y546u56yj'
            },
            {
                id: 4,
                name: 'John Doe',
                email: 'john@doe.com',
                password: 'casdcg45y546u56yj'
            }
        ]
    })
}
