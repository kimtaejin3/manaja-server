module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      MeetingName: String,
      MeetingDates: [Date],
      startHour: String,
      endHour: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Meeting = mongoose.model("meeting", schema);

  return Meeting;
};
