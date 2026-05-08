import Anthropic from "@anthropic-ai/sdk";

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.MODEL_NAME ?? "claude-sonnet-4-7";

  if (!apiKey) {
    throw new Error(
      "ANTHROPIC_API_KEY is not set. Put it in .env or export it before running npm start.",
    );
  }

  const anthropic = new Anthropic({ apiKey });

  const msg = await anthropic.messages.create({
    model,
    max_tokens: 1000,
    temperature: 0.0,
    messages: [
      {
        role: "user",
        content:
          "Hello, Claude!",
      },
    ],
  });
  console.log(msg.content);
}

main().catch(console.error);
