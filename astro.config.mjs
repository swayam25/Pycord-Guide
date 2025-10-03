// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightThemeNova from "starlight-theme-nova";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    site: "https://guide.pycord.dev",
    integrations: [
        starlight({
            title: "Pycord Guide",
            description: "The comprehensive guide for building Discord bots with Pycord - the modern Python Discord API wrapper.",
            favicon: "/favicon.ico",
            logo: {
                src: "./src/images/logo.webp",
                alt: "Pycord Logo",
            },
            customCss: ["/src/styles/app.css"],
            components: {
                Head: "./src/components/CustomHead.astro",
            },
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/Pycord-Development/pycord",
                },
                {
                    icon: "discord",
                    label: "Discord",
                    href: "https://discord.gg/pycord",
                },
                {
                    icon: "document",
                    label: "Pycord Docs",
                    href: "https://docs.pycord.dev",
                },
            ],
            sidebar: [
                {
                    label: "Getting Started",
                    items: [
                        { label: "Introduction", link: "/introduction/" },
                        { label: "Installation", link: "/installation/" },
                        { label: "Creating Your First Bot", link: "/getting-started/creating-your-first-bot/" },
                        { label: "More Features", link: "/getting-started/more-features/" },
                        { label: "Rules and Common Practices", link: "/getting-started/rules-and-common-practices/" },
                        { label: "Hosting Your Bot", link: "/getting-started/hosting-your-bot/" },
                    ],
                },
                {
                    label: "Interactions",
                    items: [
                        { label: "Discord Interactions", link: "/interactions/" },
                        {
                            label: "Application Commands",
                            collapsed: false,
                            items: [
                                { label: "Slash Commands", link: "/interactions/application-commands/slash-commands/" },
                                { label: "Context Menus", link: "/interactions/application-commands/context-menus/" },
                                { label: "Localizations", link: "/interactions/application-commands/localizations/" },
                            ],
                        },
                        {
                            label: "UI Components",
                            collapsed: false,
                            items: [
                                { label: "Buttons", link: "/interactions/ui-components/buttons/" },
                                { label: "Dropdowns", link: "/interactions/ui-components/dropdowns/" },
                                { label: "Modal Dialogs", link: "/interactions/ui-components/modal-dialogs/" },
                            ],
                        },
                    ],
                },
                {
                    label: "Popular Topics",
                    items: [
                        { label: "Cogs", link: "/popular-topics/cogs/" },
                        { label: "Error Handling", link: "/popular-topics/error-handling/" },
                        { label: "Intents", link: "/popular-topics/intents/" },
                        { label: "Sharding", link: "/popular-topics/sharding/" },
                        { label: "Subclassing Bots", link: "/popular-topics/subclassing-bots/" },
                        { label: "Threads", link: "/popular-topics/threads/" },
                    ],
                },
                {
                    label: "Extensions",
                    items: [
                        { label: "Bridge", link: "/extensions/bridge/" },
                        {
                            label: "Commands",
                            collapsed: false,
                            items: [
                                { label: "Prefixed Commands", link: "/extensions/commands/prefixed-commands/" },
                                { label: "Help Command", link: "/extensions/commands/help-command/" },
                                { label: "Groups", link: "/extensions/commands/groups/" },
                            ],
                        },
                        {
                            label: "Pages",
                            collapsed: false,
                            items: [
                                { label: "Paginator Basics", link: "/extensions/pages/paginator-basics/" },
                                { label: "Paginator FAQ", link: "/extensions/pages/paginator-faq/" },
                            ],
                        },
                        { label: "Tasks", link: "/extensions/tasks/" },
                    ],
                },
                {
                    label: "Voice",
                    items: [
                        { label: "Voice Overview", link: "/voice/" },
                        { label: "Playing Audio", link: "/voice/playing/" },
                        { label: "Receiving Audio", link: "/voice/receiving/" },
                    ],
                },
                {
                    label: "More",
                    items: [
                        { label: "Virtual Environments", link: "/more/virtual-environments/" },
                        { label: "Git", link: "/more/git/" },
                        { label: "Contributing", link: "/more/contributing/" },
                        { label: "Community Resources", link: "/more/community-resources/" },
                    ],
                },
            ],
            plugins: [starlightThemeNova()],
        }),
        svelte(),
        react(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
