const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('5630628620:AAEff-FdPaIO7lqW4DinnItuVQdQh9DLauY');
let condition_operator = 'Умовний (потрійний) оператор — це єдиний оператор JavaScript, який приймає три операнди: умову, за якою стоїть знак питання ( ?), потім вираз, який потрібно виконати, якщо умова відповідає дійсності , після якого стоїть двокрапка ( :), і, нарешті, вираз, який потрібно виконати, якщо умова хибна . Цей оператор часто використовується як альтернатива if...elseоператору: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator';
let loop = 'Цикли пропонують швидкий і простий спосіб робити щось неодноразово. У цьому розділі Посібника з JavaScript представлені різні оператори ітерації, доступні для JavaScript. Ви можете розглядати петлю як комп’ютеризовану версію гри, де ви говорите комусь зробити X кроків в одному напрямку, а потім Y кроків в іншому. Наприклад, ідею «Іди 5 кроків на схід» можна виразити так петлею: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration?retiredLocale=uk';
bot.start((ctx) => ctx.reply('Список:', Markup.inlineKeyboard(
    [Markup.button.callback('Оператори умов', 'btn_1'), Markup.button.callback('Цикли', 'btn_2')],
)));

bot.action('btn_1', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(condition_operator, {
            disable_web_page_preview: true
        })
    } catch (e) {
        console.error(e)
    }
})
bot.action('btn_2', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML(loop, {
            disable_web_page_preview: true
        })
    } catch (e) {
        console.error(e)
    }
})

bot.launch();
   