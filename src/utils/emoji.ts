export function emojiToTwemoji(emoji: string): string {
    // Convert emoji to codepoint(s)
    const codepoints = Array.from(emoji)
        .map((char) => {
            const codepoint = char.codePointAt(0);
            return codepoint ? codepoint.toString(16) : "";
        })
        .filter(Boolean)
        .join("-");

    // Return Twemoji CDN URL
    return `https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/${codepoints}.svg`;
}
