from config import TOKEN

from aiogram import Bot
from aiogram.dispatcher import Dispatcher


bot = Bot(TOKEN)
dp = Dispatcher(bot)