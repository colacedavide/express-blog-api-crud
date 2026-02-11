const cibo = require('../routers/ciboElenco');

//index
const ciboIndex = (req, res) => {
    function index(req, res) {
        let cibofilt = cibo;

        if (req.query.tags) {
            cibofilt = cibo.filter(
                post => post.tags.includes(req.query.tags)
            );
        }


        res.json(cibofilt)

    }
}


function show(req, res) {


    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Questo post non esiste"
        })
    }

    res.json(post);
}



function create(req, res) {
    res.send("creo cose")
}



function update(req, res) {

    const id = parseInt(req.params.id)

    const cib = cibo.find(cib => cib.id === id);

    if (!cib) {
        return res.status(404).json({
            error: "Not Found",
            message: "Cibo non trovato"
        });
    }
    cib.title = req.body.title;
    cib.content = req.body.content;
    cib.image = req.body.image;
    cib.tags = req.body.tags;

    res.json({
        post: cib,
        message: `Modifico il cibo con id ${id}`
    });
}



function destroy(req, res) {

    const id = parseInt(req.params.id)


    const post = cibo.find(cib => cib.id === id);



    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Questo cibo non esiste"
        })
    }
    const NuovoID = cibo[cibo.length - 1].id + 1;

    const newPost = {
        id: NuovoID,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };

    cibo.push(newPost);

    cibo.splice(cibo.indexOf(post), 1);

    console.log(cibo);




    res.sendStatus(204)
}

module.exports = { index, show, create, update, destroy }