from aiogram import types, Dispatcher
from create_bot import dp, bot
from keyboards import kb_user
from inlinekb import markups as nav

@dp.message_handler(commands=['start', 'help'])
async def command_start(message : types.Message):
    await bot.send_message(message.from_user.id, 'Привет, это бот-PROВОДНИК. Здесь мы ответим на твои вопросы ;)',
    reply_markup=kb_user)


#контакты
@dp.message_handler(text='Контакты ☎️')
async def contacts_text(message: types.Message):
    await bot.send_message(message.from_user.id, 
    'Наши контакты:', reply_markup=nav.contactsMenu)

#вопросы

@dp.message_handler(text='Вопросы 🤔')
async def questions_provodnik_command(message : types.Message):
    await bot.send_message(message.from_user.id, 
    '   Нажми на вопрос, ответ на который тебя интересует:', reply_markup=nav.questionsMenu)

#ответы на вопросы
@dp.callback_query_handler(text="firstquestion")
async def frstquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'Желание учиться, трудолюбие и терпение. Из более материальных вещей - тетради для каждого предмета (причем лучше завести отдельные тетради для записи лекций и практических занятий), пишущие принадлежности (ручки, карандаши). О специфических вещах расскажут преподаватели на каждой из дисциплин.')

@dp.callback_query_handler(text="secondquestion")
async def scndquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id,
    '''
            Для девушек: 
    — пиджак;
    — юбка длины макси темного оттенка или в клетку, полоску, без рисунка;
    — блуза или водолазка однотонного оттенка;
    — платок однотонный, любого цвета, кроме черного.
    Для юношей:
    — пиджак;
    — рубашка или водолазка однотонного оттенка или в клетку, полоску, без рисунка;
    — джемпер-безрукавка темного оттенка;
    — галстук любого цвета. ''')

@dp.callback_query_handler(text="thirdquestion")
async def thrdquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'О правах и обязанностях, а также о том, что нельзя делать, Вы можете узнать из этого документа: https://clck.ru/sGNev')

@dp.callback_query_handler(text="fourthquestion")
async def frthques(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'Расписание можно посмотреть здесь: https://clck.ru/zVYzz, а также оно всегда будет на специальном стенде вашего факультета.')

@dp.callback_query_handler(text="fifthquestion")
async def ffthquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'Одна пара длится полтора часа, перерыв между парами - 10 минут, кроме большой перемены с 12:10 до 12:45.')

@dp.callback_query_handler(text="sixthquestion")
async def sxthquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'Учеба только началась, но не волнуйся! Каникулы тоже будут😊 Графика пока нет, мы его добавим, как только он появится')

@dp.callback_query_handler(text="seventhquestion")
async def svnsquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'Хочешь стать активистом? У тебя на факультете есть профком, обратись к нему, он тебе всё объяснит.')

@dp.callback_query_handler(text="eighthquestion")
async def eightsquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'Максимально подробно об этом здесь: https://chesu.ru/sveden/files/Pologhenie_o_ballyno-reytingovoy_sisteme.FR12.pdf')

@dp.callback_query_handler(text="ninethquestion")
async def nnsquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'Для входа в любой корпус у  вас обязательно должны быть с собой кампусная карта (сделайте ее до начала занятий, иначе приходится ждать в очереди) и студенческий билет. ')

@dp.callback_query_handler(text="tenthquestion")
async def tenquest(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_message(message.from_user.id, 'Напиши нам, мы поможем! https://vk.com/club212816706')

#расположение
@dp.message_handler(text="Расположение корпусов 🗺")
async def unic_place_command(message : types.Message):
    await bot.send_message(message.from_user.id, 'Выбери корпус:', reply_markup=nav.mainMenu)



#кнопки
@dp.callback_query_handler(text="unicposition")
async def unicpos(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_location(message.from_user.id, latitude = 43.3115479708524, longitude = 45.70301498046677)
    await bot.send_message(message.from_user.id, '''
💰 Институт экономики и финансов 
💂‍♀️ Исторический факультет 
🩺 Медицинский институт 
🌎 Факультет иностранных языков 
🦉 Филологический факультет
📚 Библиотека
🥊 Спортзал 
🎬 Актовый зал 
🥼 Лаборатории''')

@dp.callback_query_handler(text="secondunicpos")
async def second_unicpos(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_location(message.from_user.id, latitude = 43.32676723154031, longitude = 45.713466622960205)
    await bot.send_message(message.from_user.id, 
'''🎖️ Факультет государственного управления
⚖️ Юридический факультет
📟 Точка кипения, Технопарк, мужской спортзал
📚 Библиотека на юридическом факультете
⌨️ Типография''')

@dp.callback_query_handler(text="thirdunicpos")
async def third_unicpos(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_location(message.from_user.id, latitude = 43.31542124706471, longitude = 45.724813999641974)
    await bot.send_message(message.from_user.id, '''
🗾 Факультет географии и геоэкологии 
🧮 Институт математики, физики и информационных технологий ,
🎬 Актовый зал
🚺 Бассейн (Женский) 
🥼 Лаборатория ''')

@dp.callback_query_handler(text="fourthunicpos")
async def fourth_unicpos(message: types.Message):
    await bot.delete_message(message.from_user.id, message.message.message_id)
    await bot.send_location(message.from_user.id, latitude = 43.32067076935024, longitude = 45.737301633520715)
    await bot.send_message(message.from_user.id, 
    '''
👨‍💻 Агротехнологический институт 
🧪 Биолого-химический факультет 
🚹 Бассейн (мужской) 
🏘️ Общежитие 
🍀 Карбоновое поле 
    '''
    )





def questions_handlers_user(dp : Dispatcher):

    dp.register_message_handler(command_start, commands=['start', 'help'])
    dp.register_message_handler(questions_provodnik_command, commands=['Вопросы'])