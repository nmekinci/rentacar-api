"use strict";

const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    /*
        #swagger.tags = ["Reservations"]
        #swagger.summary = "List Reservations"
        #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await res.getModelList(Reservation);

    res.status(200).send({
      error: false,
      moreDetails: await res.getModelListDetails(Reservation),
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Create Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    creatorId:"....",
                    carId:".....",
                    startDate:date,
                    endDate:date,
                    totalPrice:number
                }
            }
        */
    const data = await Reservation.create(req.body);
    res.status(201).send({
      error: false,
      data,

    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "For single Reservation"
        */

    const data = await Reservation.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Update Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "reservList":[{"reservationId":"...."}]
                    "isActive": true,
                    "isStaff": false,
                    "isAdmin": false,
                }
            }
        */
    const data = await Reservation.updateOne({ _id: req.params.id }, req.body,{runValidators:true});

    res.status(202).send({
      error: false,
      data,
      newCreatedReservation: await Reservation.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.sumary = "Delete single Reservation "
        */
    const data = await Reservation.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
      note: data.deletedCount ? "deleted":"there is no RESERVATION record for delete"
    });
  },
};