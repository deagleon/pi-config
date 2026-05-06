import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default async function (pi: ExtensionAPI) {
    pi.registerProvider("manifest-v2", {
        name: "Manifest V2",
        baseUrl: "https://app.manifest.build/v1",
        apiKey: "mnfst_SSjrE1fHRPF2Pw9SKJd1I5VSNQArWMaweOey-prKBYc",
        api: "openai-completions",
        models: [
            {
                id: "auto",
                name: "Auto",
                reasoning: true,
                input: ["text", "image"],
                contextWindow: 128000,
                maxTokens: 16384,
                cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
                compat: {
                    supportsDeveloperRole: false
                }
            }
        ]
    });
}
