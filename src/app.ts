import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { logger } from "utils/logger";
import { origins } from "constants/origins";
import { morganConfig } from "middlewares/morgan";

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
	app.use(cookieParser());
	app.use(morganConfig);

	app.get("/", (req, res) => {
		return res.status(200).json({
			success: true,
			message: "Welcome to Biller API!!",
		});
	});

	app.listen(PORT, () => logger.info(`App is running at ${PORT}`));
};
