import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import AppDataSource from "./common/Database";
import { DataSource } from "typeorm";

// REUSABLE DATABASE CONNECTION
let dbConn: DataSource;

export const handler: APIGatewayProxyHandlerV2 = async () => {
  console.log("Connecting to DB");
  dbConn = dbConn ?? (await AppDataSource.initialize());

  console.log("Running Migrations...");
  const migrationResults = await dbConn.runMigrations();
  console.log("Ran Migratios", migrationResults);

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `The following migrations were run: ${migrationResults}.`,
  };
};
