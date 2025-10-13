#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Простое Telegram Bot приложение на Python
Использует библиотеку python-telegram-bot
"""

import logging
import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

# Загружаем переменные окружения из .env файла
load_dotenv()

# Настройка логирования
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обработчик команды /start"""
    user = update.effective_user
    await update.message.reply_text(
        f'Привет, {user.first_name}! 👋\n'
        f'Я простой Telegram бот.\n'
        f'Используй /help чтобы узнать что я умею.'
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обработчик команды /help"""
    help_text = (
        'Доступные команды:\n'
        '/start - Начать работу с ботом\n'
        '/help - Показать это сообщение\n'
        '/about - Информация о боте\n'
        '\nТакже можешь просто отправить мне текстовое сообщение!'
    )
    await update.message.reply_text(help_text)


async def about(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обработчик команды /about"""
    await update.message.reply_text(
        '🤖 Это простой Telegram бот на Python\n'
        'Создан с использованием библиотеки python-telegram-bot\n'
        'GitHub: https://github.com/Tridgi/Bugaga'
    )


async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Эхо-обработчик для текстовых сообщений"""
    user_message = update.message.text
    await update.message.reply_text(f'Ты написал: {user_message}')


async def error_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Обработчик ошибок"""
    logger.error(f'Update {update} caused error {context.error}')


def main() -> None:
    """Главная функция - запуск бота"""
    # Получаем токен из переменных окружения
    token = os.getenv('TELEGRAM_BOT_TOKEN')
    
    if not token:
        logger.error('TELEGRAM_BOT_TOKEN не найден! Создайте файл .env и добавьте токен.')
        return
    
    # Создаём приложение
    application = Application.builder().token(token).build()
    
    # Регистрируем обработчики команд
    application.add_handler(CommandHandler('start', start))
    application.add_handler(CommandHandler('help', help_command))
    application.add_handler(CommandHandler('about', about))
    
    # Обработчик текстовых сообщений
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))
    
    # Обработчик ошибок
    application.add_error_handler(error_handler)
    
    # Запускаем бота
    logger.info('Бот запущен...')
    application.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == '__main__':
    main()
