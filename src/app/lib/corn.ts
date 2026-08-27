import cron from "node-cron";

export const deleteUnverifiedDoctor = async () => {
  cron.schedule("* * * * *", () => {
    console.log("Doctor Delete");
  });
};
