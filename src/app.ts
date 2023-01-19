import express from "express";
import { logger } from "utils/logger";

export const startApp = () => {
	const app = express();
	const PORT = process.env["PORT"];

	app.get("/", (req, res) => {
		return res.status(200).json({
			success: true,
			message: "Welcome to Biller API!!",
		});
	});

	app.listen(PORT, () => logger.info(`App is running at ${PORT}`));
};
