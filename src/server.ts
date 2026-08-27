import app from "./app";
import config from "./app/config";
import { transporter } from "./app/lib/nodemailer";
import { prisma } from "./app/lib/prisma";
import { redisClient } from "./app/lib/redis";
import cron from "node-cron";
import {
  seedSuperAdmin,
  seedTesterAdmin,
  seedTesterDoctor,
} from "./app/utils/seed";

const PORT = config.port;

const main = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database Successfully.");

    await redisClient.connect();
    console.log("Redis connect Successfully");

    await transporter.verify();
    console.log("Nodemailer connect Successfully");

    await seedTesterAdmin();
    await seedTesterDoctor();
    await seedSuperAdmin();

    cron.schedule("* * * * *", () => {
      console.log("running a task every minute");
    });
	
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main();
