const db = require("../models");
const Meeting = db.meeting;

exports.create = (req, res) => {
  if (
    !req.body.name ||
    !req.body.dates ||
    !req.body.startHour ||
    !req.body.endHour
  ) {
    res.status(400).send({ message: "입력되지 않은 값이 있습니다." });
    return;
  }

  const meeting = new Meeting({
    name: req.body.name,
    dates: req.body.dates,
    startHour: req.body.startHour,
    endHour: req.body.endHour,
  });

  meeting
    .save(meeting)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "회의를 생성하는 동안 오류가 발생했습니다",
      });
    });
};
