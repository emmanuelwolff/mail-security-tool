<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;

class ListUsersAction extends UserAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $requests = FakeDataGenerator::generate(50);

        $this->logger->info("Users list was viewed.");

        return $this->respondWithData([
            'requests' => $requests,
            'done' => (rand(1, 10) === 10) 
        ]);
    }
}

class FakeDataGenerator {

    static function generate($num_rows) {
        $faker = \Faker\Factory::create();
        $i = 0;
        $results = [];
        while($i < $num_rows){
            $row = [
                'id' => $faker->uuid,
                'received_at' => $faker->date('Y-m-d H:i:s'),
                'requested_at' => $faker->date('Y-m-d H:i:s'),
                'requested_by' => $faker->email,
                'recipient' => 'Requester',
                'sender'    => $faker->email,
                'subject' => $faker->sentence,
                'status' => $faker->randomElement(['open', 'rejected', 'released'], 1),
            ];
            $row['recipient'] = rand(0, 1)? 'Requester' : $faker->email; 
            $row['rejected_status'] = $row['status'] === 'rejected' ? 
                $faker->randomElement(['Phishing', 'Malware']) : '';
            $results[] = $row;
            $i++;
        }
        return $results;
    }
}

