# Emoji Canvas

An easy to use module to write text with parsed emojis (supports discord emojis too) in [deno-canvas](https://deno.land/x/canvas@v1.1.3)!

[![](https://www.codefactor.io/repository/github/scientific-dev/emoji-canvas/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/scientific-dev/emoji-canvas)
[![](https://img.shields.io/badge/VIEW-GITHUB-white?style=for-the-badge)](https://github.com/scientific-dev/emoji-canvas)
[![](https://img.shields.io/github/v/tag/scientific-dev/emoji-canvas?style=for-the-badge&label=version)](https://github.com/scientific-dev/emoji-canvas)

## Example

```ts
import Canvas, { dataURLtoFile, loadImage } from 'https://deno.land/x/canvas@v1.1.3/mod.ts';
import fillTextWithEmoji from "https://raw.githubusercontent.com/scientific-dev/emoji-canvas/master/mod.ts";

const canvas = Canvas.MakeCanvas(200, 200);
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, 800 - 20, 800 - 20);
ctx.fillStyle = 'white';
ctx.font = '30px monospace';

await fillTextWithEmoji(ctx, 'Hi 🤣', 10, 40); 
Deno.writeFileSync("Test.png", dataURLtoFile(canvas.toDataURL()))
```

![Example with unicode emojis](https://github.com/scientific-dev/emoji-canvas/blob/master/examples/example_1.png?raw=true)

And using discord emojis!

```ts
await fillTextWithEmoji(ctx, 'Hi <:kek:819597288238088213>', 10, 40); 
```

![Example with discord emojis](https://github.com/scientific-dev/emoji-canvas/blob/master/examples/example_2.png?raw=true)

> This package was originally created by [@abh80](https://github.com/abh80) for node.js!
