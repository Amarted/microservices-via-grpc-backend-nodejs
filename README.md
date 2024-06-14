# Server application

## Описание

Приложение состоит из модулей, каждый из которых расположен в отдельной папке в папке `src/modules` и содержит главный файл модуля `moduleName.module.ts`, в котором определены все провайдеры, контроллеры, зависимости модуля, а также экспортировать то, что этот модуль будет предоставлять другим модулям, когда они будут использовать его как зависимость.
Модули разбиты на несколько слоёв, каждый из которых отвечает за свою область. Например главная область, с бизнес логикой приложения располагается в верхнем слое `domain`, а работа с внешними источниками, как например файлами, или базой данных в слое `infrastructure`. Что касается логики приложения, но не бизнес логики, например контроллеры с ендпоинтами располагается в слое `application`.  Суть в том, чтобы была чёткая структура слоёв со своими зонами ответсвенности, и верхний слой мог использовать нижний слой, но не наоборот. Например, если мы хотим внести изменения в логику приложения, то нам нужно работать с `domain`, а если хотим заменить использование файлового хранилища данных, на какую-то СУБД, то нам в `infrastructure`. При этом слой бизнес логики приложения определяет нужные ему интерфейсы, например репозитория, для получения данных, но никак не зависит от того, с каким именно хранилищем и каким образом он будет работать - хоть в памяти, хоть в файлах или в сети. Это уже реализует слой инфраструктуры.

## Конфигурация
Скопировать файл .env.example, переименовать в .env и установить соответсвующие переменные, например `dbHost`, `dbPort` и т.д., для соединения с базой данных.

## Установка

```bash
# Install dependencies
$ yarn install

# Run migrations to update the DB
$ npx mikro-orm migration:up
```

## Запуск приложения

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Запуст тестов

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
