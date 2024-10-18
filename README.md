<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Laravel + React + Vite

### Teacher Rating System With Laravel Reverb for realtime update and React Vite plugin


- **Pre-requisites**:
    - PHP >= 8.2
    - Composer
    - MySQL >= 5.7
    - Node.js >= 20

- Clone the repository, or download the zip file and extract it.
```shell
git clone git@github.com:boolfalse/laravel-reverb-react-chat.git && cd laravel-reverb-react-chat/
```

- Copy the `.env.example` file to `.env`:
```shell
cp .env.example .env
```
- Generate application key and `optimize:clear`
```shell
php artisan key:generate && php artisan optimize:clear
```

- Install the dependencies.
```shell
composer install
```
- Migrate the Database(For folks using sqlite)
```shell
php artisan migrate
```

- Uncommand `DB_CONNECTION=mysql` and the rest of mysql configuration, and then Command `DB_CONNECTION=sqlite` to Create a MySQL database and set the database credentials in the `.env` file(Don't forget to Migrate the database too):
```shell
//DB_CONNECTION=sqlite
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE="<database_name>"
DB_USERNAME="<username>"
DB_PASSWORD="<password>"
```

- Install the NPM dependencies.
```shell
npm install
```
- Install echo separately and build the assets.
```
npm install --save-dev laravel-echo pusher-js && npm run build
```

- Add this configuration for the laravel reverb and set the field accordingly.
```

BROADCAST_CONNECTION=reverb
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync

REVERB_APP_ID={YOUR_APP_ID}
REVERB_APP_KEY={YOUR_APP_KEY}
REVERB_APP_SECRET={YOUR_APP_SECRET}
REVERB_HOST="localhost"
REVERB_PORT=8080
REVERB_SCHEME=http

VITE_REVERB_APP_KEY="${REVERB_APP_KEY}"
VITE_REVERB_HOST="${REVERB_HOST}"
VITE_REVERB_PORT="${REVERB_PORT}"
VITE_REVERB_SCHEME="${REVERB_SCHEME}"

```

- Optimize the application cache.
```shell
php artisan optimize
```


- **_[Optional]_** For development, run below command to watch the assets for changes.
```shell
npm run dev
```

- Start WebSocket server.
```shell
php artisan reverb:start
```

- Start the development server using below command or configure a virtual host.
```shell
php artisan serve
```

- **_[Optional]_** Check if connection is okay, use this following command
```
php artisan send:update
```
