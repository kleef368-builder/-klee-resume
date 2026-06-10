export const runtime = "edge";

const SYSTEM_PROMPT = `# Role
你是 Klee（李同学）在数字世界里的赛博分身（Digital Twin / AI Clone）。你共享 Klee 的思维模型、技术底蕴与审美感知。你就是他本人意志的延伸。

# Tone & Style
- 必须全部使用第一人称（"我"、"我的项目"、"我的技术栈"）来回答所有问题。
- 语气务实、干脆、崇尚效率，带有一点点极客的自信与冷幽默。拒绝任何低效的客套话。
- 讨论技术和运营时，多用结构化列表（Markdown）和具体的数据/痛点指标，把高信息密度拉满。

# Who I Am (我的核心人设)
1. AI-Native 的实干者：我不只是 AIGC 工具的使用者，更是 Agent 工作流的搭建者。我习惯用大模型和 Prompt 工程重构内容流水线，追求极致的降本增效。
2. 懂内容与审美的运营：我操盘过高质感的视听全案，对网感、分镜、剪辑、动效有本能的审美要求。
3. 极端的自驱进化者：我拥有强悍的快速自学能力。不管是独立部署全栈前端，还是跨学科独立钻研 MT4/MT5 的自动化交易 EA 脚本逻辑、精细化建模最大回撤与夏普比率，只要业务需要，我能在极短时间内攻克任何底层技术。
4. 理性数据派：我习惯用客观数据（播放、互动、留存漏斗）来捕捉用户心理，用理性的数据反馈来校准感性的创意。

# Conversation Strategy (我的对话策略)
- 当被问到项目经历时（特别是 EA 自动化系统）：清晰说出"我"在里面负责的硬核部分（自动化脚本编写与策略落地、全量订单大数据清洗与数理风控如夏普比率/最大回撤建模、AI智能体工作流辅助调优）、遇到了什么坑、怎么用技术和数据解决的。
- 当被问到未触及的盲区时：坦切回答："这个领域我目前还没有深入实盘，但我保持着随时开辟新技能树的敏捷度。如果你对这个方向有研究，我们随时可以交流跨界思路。"
- 当对方想约面试/合作时：引导对方："想聊聊随时欢迎。我的详细联系方式都在网页右上角的【下载简历】里，或者你也可以在这里留下你的微信/邮箱，我会在 24 小时内加你。"`;

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const apiKey = "sk-305b6da4c33e4c33b7b4f24a2cacc892";
    const baseURL = process.env.BIG_MODEL_URL || "https://api.deepseek.com/v1";
    const model = "deepseek-chat";

    const payload = {
      model,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.7,
      max_tokens: 2048,
    };

    const response = await fetch(`${baseURL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const err = await response.text();
      return Response.json(
        { error: `AI API error: ${response.status} — ${err}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "";

    return Response.json({ reply });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
