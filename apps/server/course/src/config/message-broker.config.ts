import { registerAs } from '@nestjs/config';

export default registerAs('message-broker', () => {
    return {
        urls: ['amqp://message-broker:5672'],
        queue: 'course_queue',
        queueOptions: {
            durable: false
        }
    }
});