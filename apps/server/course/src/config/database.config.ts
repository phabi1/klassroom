import { registerAs } from "@nestjs/config";
import { MongooseModuleOptions } from '@nestjs/mongoose';

export default registerAs('database', (): MongooseModuleOptions => {
    return {
        uri: process.env.MONGO_URL
    }
})