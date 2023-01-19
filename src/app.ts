import express from "express";
import { logger } from "utils/logger";
import cors from "cors";
import { origins } from "constants/origins";

export const startApp = () => {
	const app = express();
	const PORT = process.env["PORT"];

	app.use(express.json());
	app.use(
		cors({
			credentials: true,
			origin: origins,
		})
	);

	app.get("/", (req, res) => {
		return res.status(200).json({
			success: true,
			message: "Welcome to Biller API!!",
		});
	});

	app.listen(PORT, () => logger.info(`App is running at ${PORT}`));
};
