module.exports = (mongoose) => {
  const Meeting = mongoose.model(
    "meeting",
    mongoose.Schema(
      {
        MeetingName: String,
        MeetingDates: [Date],
        startHour: String,
        endHour: String,
      },
      { timestamps: true }
    )
  );

  return Meeting;
};
