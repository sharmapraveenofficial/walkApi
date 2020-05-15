const Test=require('../model/testModel')

exports.getData = (req, res, next) => {
    const selectedArr = ['name', 'age', 'gender']
   
    // const testData=await Test.create({
    //     name:req.body.name,
    //     age:req.body.age,
    //     gender:req.body.gender
    // })

    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //       testData
    //     }
    //   });

    function getResult(data) {
        const map = data

        output = {}
        for (variable in map) {
            if (selectedArr.includes(variable)) {
                output[variable] = (req.body[variable])
            }
        }

     return res.json(output)
    }


    if (req.method == "GET") {
        getResult(req.query)
    } else {
        if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {

            getResult(req.body)

            // const query = req.query;
            // if(query){
            //     console.log(query);
            // }else{
            //     getResult()
            // }
            // //res.json(req.body.name)
        }
        else if (req.headers['content-type'] == 'application/json') {

            getResult(req.body)

        }
        else if (req.headers['cotent-type'] == 'application/xml') {
            const xml = req.body;
            res.send(xml)

        }
        else if (req.headers['content-type'] == 'text/plain') {
            res.send(req.body)
        }
        else {

            getResult(req.body)

        }
    }

    next();
};

