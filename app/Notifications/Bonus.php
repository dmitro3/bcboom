<?php

namespace App\Notifications;

use App\Models\Promotion;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class Bonus extends Notification
{
    use Queueable;
    private $promotion;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Promotion $promotion)
    {
        //
        $this->promotion = $promotion;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('Hello '.$this->promotion->username)
                    // ->action('Enter Dashboard', url('/'))
                    ->line('You have been credited with a '. $this->promotion->type .' of '.$this->promotion->amount.' R$')
                    ->line('Enjoy your bonus!')
                    ->action('Go home', url('/'));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
