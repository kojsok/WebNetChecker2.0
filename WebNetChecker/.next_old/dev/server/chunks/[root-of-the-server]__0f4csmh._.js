module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/seed/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/categories.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$services$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/services.ts [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        categories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$categories$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CATEGORIES"],
        targets: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$services$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SEED_TARGETS"]
    });
}
}),
"[project]/src/lib/config/categories.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "getCategory",
    ()=>getCategory,
    "isKnownCategory",
    ()=>isKnownCategory
]);
const CATEGORIES = [
    {
        id: "custom",
        label: "Свои цели",
        icon: "Plus"
    },
    {
        id: "messengers",
        label: "Мессенджеры",
        icon: "MessageCircle"
    },
    {
        id: "dev",
        label: "Разработка",
        icon: "Code2"
    },
    {
        id: "ai",
        label: "ИИ-сервисы",
        icon: "Sparkles"
    },
    {
        id: "ai-routers",
        label: "ИИ-роутеры",
        icon: "Route"
    },
    {
        id: "ai-tools",
        label: "ИИ-инструменты",
        icon: "Wand2"
    },
    {
        id: "social",
        label: "Соцсети",
        icon: "Users"
    },
    {
        id: "streaming",
        label: "Стриминг",
        icon: "Play"
    },
    {
        id: "tools",
        label: "Инструменты",
        icon: "Wrench"
    },
    {
        id: "finance",
        label: "Финансы",
        icon: "TrendingUp"
    },
    {
        id: "basics",
        label: "Базовые",
        icon: "Globe"
    }
];
const CATEGORY_BY_ID = new Map(CATEGORIES.map((c)=>[
        c.id,
        c
    ]));
function getCategory(id) {
    return CATEGORY_BY_ID.get(id);
}
function isKnownCategory(id) {
    return CATEGORY_BY_ID.has(id);
}
}),
"[project]/src/lib/config/services.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEED_CATALOG",
    ()=>SEED_CATALOG,
    "SEED_TARGETS",
    ()=>SEED_TARGETS
]);
const SEED_CATALOG = [
    {
        id: "messengers",
        services: [
            {
                name: "Telegram API",
                url: "https://api.telegram.org"
            },
            {
                name: "Telegram Links",
                url: "https://t.me"
            },
            {
                name: "WhatsApp",
                url: "https://web.whatsapp.com"
            },
            {
                name: "Discord",
                url: "https://discord.com"
            },
            {
                name: "Slack",
                url: "https://slack.com"
            }
        ]
    },
    {
        id: "dev",
        services: [
            {
                name: "Docker Hub",
                url: "https://registry-1.docker.io"
            },
            {
                name: "GitHub",
                url: "https://github.com"
            },
            {
                name: "GitLab",
                url: "https://gitlab.com"
            },
            {
                name: "NPM",
                url: "https://npmjs.com"
            },
            {
                name: "Stack Overflow",
                url: "https://stackoverflow.com"
            },
            {
                name: "Vercel",
                url: "https://vercel.com"
            },
            {
                name: "Cloudflare",
                url: "https://cloudflare.com"
            }
        ]
    },
    {
        id: "ai",
        services: [
            {
                name: "ChatGPT",
                url: "https://chatgpt.com"
            },
            {
                name: "Claude",
                url: "https://claude.ai"
            },
            {
                name: "Gemini",
                url: "https://gemini.google.com"
            },
            {
                name: "Hugging Face",
                url: "https://huggingface.co"
            },
            {
                name: "Perplexity",
                url: "https://perplexity.ai"
            },
            {
                name: "Mistral",
                url: "https://mistral.ai"
            },
            {
                name: "Cohere",
                url: "https://cohere.com"
            },
            {
                name: "Stability AI",
                url: "https://stability.ai"
            },
            {
                name: "Midjourney",
                url: "https://midjourney.com"
            },
            {
                name: "Poe",
                url: "https://poe.com"
            },
            {
                name: "Character.AI",
                url: "https://character.ai"
            },
            {
                name: "Suno",
                url: "https://suno.com"
            },
            {
                name: "Runway",
                url: "https://runwayml.com"
            },
            {
                name: "ElevenLabs",
                url: "https://elevenlabs.io"
            },
            {
                name: "Grok / xAI",
                url: "https://x.ai"
            },
            {
                name: "DeepSeek",
                url: "https://deepseek.com"
            },
            {
                name: "Qwen",
                url: "https://qwen.ai"
            }
        ]
    },
    {
        id: "ai-routers",
        services: [
            {
                name: "OpenRouter",
                url: "https://openrouter.ai"
            },
            {
                name: "OrcaRouter",
                url: "https://orcarouter.com"
            },
            {
                name: "Requesty",
                url: "https://requesty.ai"
            },
            {
                name: "Together AI",
                url: "https://together.ai"
            },
            {
                name: "Groq",
                url: "https://groq.com"
            },
            {
                name: "Fireworks AI",
                url: "https://fireworks.ai"
            },
            {
                name: "Replicate",
                url: "https://replicate.com"
            },
            {
                name: "Portkey",
                url: "https://portkey.ai"
            },
            {
                name: "LiteLLM",
                url: "https://litellm.ai"
            },
            {
                name: "Anyscale",
                url: "https://anyscale.com"
            },
            {
                name: "DeepInfra",
                url: "https://deepinfra.com"
            }
        ]
    },
    {
        id: "ai-tools",
        services: [
            {
                name: "Cursor",
                url: "https://cursor.com"
            },
            {
                name: "v0",
                url: "https://v0.dev"
            },
            {
                name: "Replit",
                url: "https://replit.com"
            },
            {
                name: "Lovable",
                url: "https://lovable.dev"
            },
            {
                name: "Bolt",
                url: "https://bolt.new"
            },
            {
                name: "LangChain",
                url: "https://langchain.com"
            },
            {
                name: "n8n",
                url: "https://n8n.io"
            },
            {
                name: "Make",
                url: "https://make.com"
            },
            {
                name: "Zapier",
                url: "https://zapier.com"
            },
            {
                name: "Pinecone",
                url: "https://pinecone.io"
            },
            {
                name: "Weaviate",
                url: "https://weaviate.io"
            },
            {
                name: "AutoGPT",
                url: "https://autogpt.net"
            },
            {
                name: "BabyAGI",
                url: "https://babyagi.com"
            }
        ]
    },
    {
        id: "social",
        services: [
            {
                name: "YouTube",
                url: "https://youtube.com"
            },
            {
                name: "Instagram",
                url: "https://instagram.com"
            },
            {
                name: "Facebook",
                url: "https://facebook.com"
            },
            {
                name: "X (Twitter)",
                url: "https://twitter.com"
            },
            {
                name: "TikTok",
                url: "https://tiktok.com"
            },
            {
                name: "LinkedIn",
                url: "https://linkedin.com"
            },
            {
                name: "Medium",
                url: "https://medium.com"
            },
            {
                name: "Reddit",
                url: "https://reddit.com"
            }
        ]
    },
    {
        id: "streaming",
        services: [
            {
                name: "Netflix",
                url: "https://netflix.com"
            },
            {
                name: "Spotify",
                url: "https://spotify.com"
            },
            {
                name: "Twitch",
                url: "https://twitch.tv"
            },
            {
                name: "SoundCloud",
                url: "https://soundcloud.com"
            }
        ]
    },
    {
        id: "tools",
        services: [
            {
                name: "Notion",
                url: "https://notion.so"
            },
            {
                name: "Canva",
                url: "https://canva.com"
            },
            {
                name: "Pinterest",
                url: "https://pinterest.com"
            },
            {
                name: "Shutterstock",
                url: "https://shutterstock.com"
            },
            {
                name: "Figma",
                url: "https://figma.com"
            },
            {
                name: "Dropbox",
                url: "https://dropbox.com"
            }
        ]
    },
    {
        id: "finance",
        services: [
            {
                name: "Binance",
                url: "https://binance.com"
            },
            {
                name: "Coinbase",
                url: "https://coinbase.com"
            },
            {
                name: "Kraken",
                url: "https://kraken.com"
            }
        ]
    },
    {
        id: "basics",
        services: [
            {
                name: "Google",
                url: "https://google.com"
            },
            {
                name: "Wikipedia",
                url: "https://wikipedia.org"
            },
            {
                name: "Microsoft",
                url: "https://microsoft.com"
            },
            {
                name: "Apple",
                url: "https://apple.com"
            },
            {
                name: "Amazon",
                url: "https://amazon.com"
            }
        ]
    }
];
const SEED_TARGETS = SEED_CATALOG.flatMap((category)=>category.services.map((service)=>({
            id: `${category.id}:${service.name}`,
            name: service.name,
            url: service.url,
            category: category.id
        })));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f4csmh._.js.map