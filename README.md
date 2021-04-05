# Emoji Canvas

An easy to use module to write text with parsed emojis (supports discord emojis too) in [deno-canvas](https://deno.land/x/canvas@v1.1.3)!

## Example

```ts
import Canvas, { dataURLtoFile, loadImage } from 'https://deno.land/x/canvas@v1.1.3/mod.ts';
import fillTextWithEmoji from "url";

const canvas = Canvas.MakeCanvas(200, 200);
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
await fillTextWithEmoji(ctx, 'Hi 🤣', 10, 40); 

Deno.writeFileSync("Test.png", dataURLtoFile(canvas.toDataURL()))
```

And using discord emojis!

```ts
await fillTextWithEmoji(ctx, 'Hi <:kek:819597288238088213>', 10, 40); 
```

> This package was originally created by [@abh80](https://github.com/abh80) for node.js!