---
layout: post
title: "Fixing AWS AppSync 'UPDATE_ROLLBACK_FAILED state and can not be updated' -error due to manual configuration change"
featured: false
---

I had manually removed and created AppSync API keys via the AWS Console and in the project we use Serverless Framework for developing & deplying. This manual change caused the stack to still try to update the now-non-existing API key and would stop to this error:

```
Error:
Stack:arn:aws:cloudformation:eu-west-1:123:stack/project/123 is in UPDATE_ROLLBACK_FAILED state and can not be updated.

The following resource(s) failed to update: [GraphQlApiintegrationtest, AuthorizationLambdaFunction].
```

The fix was to remove any reference to the old API key and in this case it was just removing or renaming an item from the `appSync.apiKeys` -list in serverless config and redeploying.