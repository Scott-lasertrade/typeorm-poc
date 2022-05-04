import { App, StackProps, Api, Stack, RDS } from "@serverless-stack/resources";

const DATABASE_NAME = "typeorm";

export default class MyStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const database = new RDS(this, "Cluster", {
      engine: "postgresql10.14",
      defaultDatabaseName: DATABASE_NAME,
      migrations: "src/common/migration",
      scaling: {
        autoPause: true,
        minCapacity: "ACU_2",
        maxCapacity: "ACU_4",
      },
    });

    // Create a HTTP API
    const api = new Api(this, "Api", {
      defaultFunctionProps: {
        environment: {
          DATABASE: DATABASE_NAME,
          CLUSTER_ARN: database.clusterArn,
          SECRET_ARN: database.secretArn,
          REGION: scope.region,
        },
        permissions: [database],
      },
      routes: {
        "GET /": "src/lambda.handler",
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
