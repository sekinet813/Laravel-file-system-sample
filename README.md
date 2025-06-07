# Laravel-file-system-sample

This repository contains a Laravel 10 skeleton that will serve as the starting point for a project using Vue 3 and Vuetify 3.

## Project setup

1. Ensure PHP (>=8.1), Composer, Node.js and npm are installed.
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Install front‑end packages:
   ```bash
   npm install
   npm install vue@3 vue-router@4 vuetify@3
   ```
4. Start the development servers:
   ```bash
   npm run dev
   php artisan serve
   ```

If you use **Laravel Herd** on macOS, you can serve the project without
running `php artisan serve` directly. After installing Herd from
[the official site](https://laravel.com/docs/10.x#laravel-herd), open
the Herd application and add this repository as a project. Herd will
automatically serve it at a `.test` domain such as
`http://laravel-file-system-sample.test`. In that case set
`APP_URL` in your `.env` file to the generated domain.

After setup the repository contains the usual Laravel directory structure:
- `app/` – application logic
- `config/` – framework and package configuration
- `database/` – migrations and seeders
- `public/` – web server document root
- `resources/` – Blade templates and front‑end assets
- `routes/` – route definitions
- `tests/` – automated tests

## Important notes

- Follow PSR‑12 for PHP code style.
- Adopt Vue's official style guide and use atomic design for components.
- Configure storage disks in `config/filesystems.php` when implementing file uploads.

For details about the Laravel framework see [the official documentation](https://laravel.com/docs).

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
