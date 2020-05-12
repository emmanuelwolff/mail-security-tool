<?php
declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->get('/', function (Request $request, Response $response) {
        $htmlIndex = file_get_contents('../client/build/index.html');
        $response->getBody()->write($htmlIndex);
        return $response;
    });

    $app->group('/api', function (Group $group) {
        $group->put('/requests/{id}', function(Request $request, Response $response) {
            $response->getBody()->write('OK');
            return $response;
        });
        $group->get('/requests', ListUsersAction::class);
    });
};
