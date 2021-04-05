import { loadImage, CanvasRenderingContext2D } from 'https://deno.land/x/canvas@v1.1.3/mod.ts';
import { parse } from 'https://cdn.skypack.dev/twemoji-parser?dts';

/**
 * Fill text and parse emoji in the canvas!
 * 
 * @param ctx The context of the canvas
 * @param text The text to parse
 * @param x The x coordinate
 * @param y The y coordinate
 * @param param4 The options while parsing!
 * @example await fillTextWithEmoji(ctx, "Hi 🤣", 10, 10);
 */
export async function fillTextWithEmoji(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, {
    emojiSideMargin = .1,
    emojiUpMargin = .1,
    fontSize = Number(ctx.font.replace(/[^\d.]/g, ''))
} = {
    emojiSideMargin: .1,
    emojiUpMargin: .1,
    fontSize: Number(ctx.font.replace(/[^\d.]/g, ''))
}) {
    const split = text.split(' ');
    const baseLine = ctx.measureText("").alphabeticBaseline || 0;
    let currentWidth = 0;
    emojiSideMargin = emojiSideMargin * fontSize;
    emojiUpMargin = emojiUpMargin * fontSize;

    for(let i = 0; i < split.length; i++) {
        const item = split[i];
        const match = item.match(/<?(a:|:)\w*:(\d{17}|\d{18})>/);
        const parsed = parse(item, { assetType: 'png' });

        if(match) {
            const image = await loadImage(`https://cdn.discordapp.com/emojis/${match[2]}.png`);
            ctx.drawImage(
                image,
                x + emojiSideMargin + currentWidth,
                y + emojiUpMargin - fontSize - baseLine,
                fontSize,
                fontSize
            );

            currentWidth += fontSize + emojiSideMargin * 2 + fontSize / 5;
        } else if(parsed.length > 0) {
            const img = await loadImage(parsed[0].url);

            ctx.drawImage(
                img,
                x + emojiSideMargin + currentWidth,
                y + emojiUpMargin - fontSize - baseLine,
                fontSize,
                fontSize
            )

            currentWidth += fontSize + emojiSideMargin * 2 + fontSize / 5;
        } else {
            ctx.fillText(item, x + currentWidth, y, fontSize);
            currentWidth += ctx.measureText(item).width + fontSize / 5;
        }
    }
}

export default fillTextWithEmoji;