import AWS from "aws-sdk";
import { api } from "@manwaring/lambda-wrapper";
import { responseInChannel } from "../businessLogic/slackResponses";
export interface SlackCommandRequest {
  token: string;
  team_id: string;
  team_domain: string;
  channel_id: string;
  channel_name: string;
  user_id: string;
  user_name: string;
  command: string;
  text: string;
  api_app_id: string;
  is_enterprise_install: string;
  response_url: string;
  trigger_id: string;
}

const commandHandler = api<SlackCommandRequest>(
  async ({ path, body, success, error }) => {
    const { SQS_BASE_URL, SQS_COMMAND_QUEUE } = process.env;
    console.log("path", path.command);
    // console.log(JSON.stringify(body, null, 2));
    const queue = new AWS.SQS({ endpoint: "${SQS_BASE_URL}" });
    await queue
      .sendMessage({
        MessageBody: "Hola",
        QueueUrl: `${SQS_BASE_URL}/${SQS_COMMAND_QUEUE}`,
      })
      .promise();
    const response = await queue
      .sendMessage({
        MessageBody: "Hola",
        QueueUrl: `${SQS_BASE_URL}/${SQS_COMMAND_QUEUE}`,
      })
      .promise();
    if (!response) {
      return error({
        body: "unable to send message",
      });
    }
    return success({
      body: responseInChannel(),
    });
  }
);

export { commandHandler };
