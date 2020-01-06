require("dotenv").config();

const Telegraf = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.hears("hi schmines", ctx =>
  ctx.reply(
    "Hi Leutz! Ich bims Schmines Schmüldenberg, ich werd euch ab sofort immer nerven und dran erinnern wenn Milan und Jan mal wieder zu faul sind zu putzen. *LÖL* das wird lustig hahaha bis dann ciao kakao"
  )
);
bot.launch();
