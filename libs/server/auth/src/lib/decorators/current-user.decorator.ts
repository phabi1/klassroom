import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const { req } = GqlExecutionContext.create(ctx).getContext();
        return req.headers['x-user-id'];
    }
);