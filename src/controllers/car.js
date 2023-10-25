"use strict";

const Car = require("../models/car");

module.exports = {
  list: async (req, res) => {
    /*
        #swagger.tags = ["Cars"]
        #swagger.summary = "List Cars"
        #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await res.getModelList(Car);

    res.status(200).send({
      error: false,
      moreDetails: await res.getModelListDetails(Car),
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Create Car"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   "brand" : "tesla",
                    "model": "x",
                    "price": 100,
                    "creatorId": "6536c4f415793f0171589283"
}
            }
        */
    const data = await Car.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "For single Car"
        */

    const data = await Car.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Update Car"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "reservList":[{"CarId":"...."}]
                    "isActive": true,
                    "isStaff": false,
                    "isAdmin": false,
                }
            }
        */
    const data = await Car.updateOne({ _id: req.params.id }, req.body,{runValidators:true});

    res.status(202).send({
      error: false,
      data,
      newCreatedCar: await Car.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.sumary = "Delete single Car "
        */
    const data = await Car.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
      note: data.deletedCount ? "deleted":"there is no CAR record for delete"
    });
  },
};
