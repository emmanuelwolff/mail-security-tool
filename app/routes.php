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
        $htmlIndex = file_get_contents('index.html');
        $response->getBody()->write($htmlIndex);
        return $response;
    });

    $app->group('/api', function (Group $group) {

        $group->put('/requests/{id}', function(Request $request, Response $response, $args) {
            $id = $args['id'];
            $status = $request->getBody()->getContents(); 
            $conn = pg_connect(getenv("DATABASE_URL"));
            if (pg_update($conn, 'mail_check_requests', ['status' => $status], ['id' => $id])){
                return $response->withStatus(200);
            }
            else{
                return $response->withStatus(400);
            }
        });

        $group->get('/requests', function(Request $request, Response $response){
            $offset = $request->getQueryParams()['offset'] ?? 0;
            $status = $request->getQueryParams()['s'] ?? null;
            $search = urldecode($request->getQueryParams()['q'] ?? '');
            $conn = pg_connect(getenv("DATABASE_URL"));
            //$result = pg_query($conn, "select * from mail_check_requests order by requested_at desc offset $offset limit 50"); 
            $query = "select * from mail_check_requests ";
            $where = 'where';
            if ($status !== null && $status !== 'all'){
                $query .= "where status = '$status' ";
                $where= 'and';
            }
            if ($search && $search != ''){
                $query .= $where . " concat(requested_by, recipient, sender, subject, status, rejected_status) like '%$search%' ";
            }
            $query .= " order by requested_at desc offset $offset limit 50"; 
            $result = pg_query($conn, $query ); 
            $requests = pg_fetch_all($result) ?: [];
            $payload = [
                'data' => [
                    'requests' => $requests,
                    'done' => count($requests) === 0 
                ]
            ];
            $json = json_encode($payload, JSON_PRETTY_PRINT);
            $response->getBody()->write($json);
            return $response->withHeader('Content-Type', 'application/json');
        });
    });
};
