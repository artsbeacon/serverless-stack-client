export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "jed-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://xbz1yzxia8.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_IRfONk7fZ",
      APP_CLIENT_ID: "3a5igk8fo9f9gi7d3ga46up44m",
      IDENTITY_POOL_ID: "us-east-1:259b969b-e536-4241-96b6-0ae09abc1e8c"
    }
};