<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Email extends Mailable
{
    use Queueable, SerializesModels;

    public $status;
    public $message_text;

    public function __construct($status, $message_text)
    {
        $this->status = $status;
        $this->message_text = $message_text;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Resultado de Importación de Vehículos',
        );
    }

    public function content(): Content
    {
        return new Content(
            // 'html' para enviar un texto rápido sin crear una vista .blade 
            htmlString: "<h2>Estado: {$this->status}</h2><p>{$this->message_text}</p>",
        );
    }

    public function attachments(): array
    {
        return [];
    }
}