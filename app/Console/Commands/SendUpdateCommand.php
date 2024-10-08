<?php

namespace App\Console\Commands;

use App\Events\GotRating;
use App\Models\Teacher;
use Illuminate\Console\Command;
use function Laravel\Prompts\form;
use function Laravel\Prompts\text;

class SendUpdateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $responses = form()
            ->text(
                label: 'Teacher id:',
                required: true,
                name: 'id'
            )
            ->text(
                label: 'Ur rating:',
                required: true,
                name: 'rating'
            )
            ->submit();

        $teacherId = Teacher::find($responses['id']);

        if (!in_array($responses['rating'], [1, 2, 3, 4, 5])) {
            $this->error('Invalid rating');
            return;
        }
        $teacherId->total_ratings += 1;
        $teacherId->sum_ratings += $responses['rating'];
        $teacherId->rating = round($teacherId->sum_ratings / $teacherId->total_ratings, 1);
        $teacherId->save();

        $teacherData = [
            'id' => $teacherId->id,
            'rating' => $teacherId->rating
        ];
        GotRating::dispatch($teacherData);
        // $name = text(
        //     label:"ur name",
        //     required:true,
        // );
        // GotRating::dispatch($name);
    }
}
