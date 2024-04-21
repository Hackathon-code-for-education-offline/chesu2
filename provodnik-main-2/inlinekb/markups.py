from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton

mainMenu = InlineKeyboardMarkup(row_width=1)
unicposition = InlineKeyboardButton(text="Главный корпус", callback_data="unicposition")
secondunicpos = InlineKeyboardButton(text="Второй корпус (Старый главный корпус)", callback_data="secondunicpos")
thirdunicpos = InlineKeyboardButton(text="Третий корпус", callback_data="thirdunicpos")
fourthunicpos = InlineKeyboardButton(text="Пятый корпус (кампус)", callback_data="fourthunicpos")

questionsMenu = InlineKeyboardMarkup(row_width=1)
firstquestion = InlineKeyboardButton(text="Что мне понадобится для учебы?", callback_data="firstquestion")
secondquestion = InlineKeyboardButton(text="Форма", callback_data="secondquestion")
thirdquestion = InlineKeyboardButton(text="Права и обязанности", callback_data="thirdquestion")
fourthquestion = InlineKeyboardButton(text="Расписание", callback_data="fourthquestion")
fifthquestion = InlineKeyboardButton(text="Сколько длится пара?", callback_data="fifthquestion")
sixthquestion = InlineKeyboardButton(text="Когда каникулы?", callback_data="sixthquestion")
seventhquestion = InlineKeyboardButton(text="Актив", callback_data="seventhquestion")
eighthquestion = InlineKeyboardButton(text="Балльно-рейтинговая система", callback_data="eighthquestion")
ninethquestion = InlineKeyboardButton(text="Что нужно всегда иметь при себе?", callback_data="ninethquestion")
tenthquestion = InlineKeyboardButton(text="Я не нашел ответа на интересующий вопрос, что делать?", callback_data="tenthquestion")

contactsMenu = InlineKeyboardMarkup(row_width=1)
vkgroup = InlineKeyboardButton(text ="Группа ВК", url = "https://vk.com/club212816706")

contactsMenu.insert(vkgroup)
questionsMenu.insert(firstquestion).insert(secondquestion).insert(thirdquestion).insert(fourthquestion).insert(fifthquestion).insert(sixthquestion).insert(seventhquestion).insert(eighthquestion).insert(ninethquestion).insert(tenthquestion)
mainMenu.insert(unicposition).insert(secondunicpos).insert(thirdunicpos).insert(fourthunicpos)