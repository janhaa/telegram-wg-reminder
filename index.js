require("dotenv").config();

const Telegraf = require("telegraf");

const schmines = new Telegraf(process.env.SCHMINES_TOKEN);
schmines.hears(/hi schmines/, ctx =>
  ctx.reply(
    "Hi Leutz! Ich bims Schmines Schmüldenberg, ich werd euch ab sofort immer nerven und dran erinnern wenn Milan und Jan mal wieder zu faul sind zu putzen. *LÖL* das wird lustig hahaha bis dann ciao kakao\nPS: ich kann sogar witze erzählen wenn du weißt wie lol"
  )
);
schmines.start(ctx =>
  ctx.reply(
    "Lolz dieses start dings ist mir noch zu hoch haha bin noch 1 bisschen dumm"
  )
);
const jokes = [
  "Isa! Haha das wars Isa is schon witz genug",
  "Was ist weiß und guckt durchs Schlüsselloch? — Ein Spannbettlaken.",
  "Welches Getränk trinken Firmenchefs? — Leitungswasser",
  "Wie heißt ein Spanier ohne Auto? — Carlos",
  "Was sitzt auf einem Baum und winkt? — Ein Huhu!",
  "Welches ist die lustigste Automarke? — Scherzedes.",
  "Kommt ein Frosch in den Milchladen. Fragt die Verkäuferin: 'Was willst du denn?' — Sagt der Frosch: 'Quak'."
];
let currentJoke = 0;
schmines.hears(/1 witz/, ctx => {
  ctx.reply("Hahah LOLZ 1 witz. kommt sofort!\n" + jokes[currentJoke]);
  currentJoke = (currentJoke + 1) % jokes.length;
});
schmines.launch();

const igor = new Telegraf(process.env.IGORINTERNATIONAL_TOKEN);
igor.hears("hi igor", ctx =>
  ctx.reply("Pff ich bin Igor International bitch auf sowas höre ich nicht")
);
igor.hears(/hi igor national/i, ctx =>
  ctx.reply("was für national?? INTERnational. dumbatz!")
);
igor.hears(/hi igor international/i, ctx =>
  ctx.reply(
    "was geht ab?! ich bin jetzt international hahaha! skrrrr. ich hab mit schmines ein feature und wir werden euch richtig ready reminden every week!"
  )
);
igor.start(ctx =>
  ctx.reply(
    "Lolz dieses start dings ist mir noch zu hoch haha bin noch 1 bisschen dumm"
  )
);
igor.hears(/n joke/, ctx => {
  ctx.reply("skrr witz is gleich am start yo\n" + jokes[currentJoke]);
  currentJoke = (currentJoke + 1) % jokes.length;
});
igor.launch();
