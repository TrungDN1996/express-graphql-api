import { config } from './app/core/config';
import { createApp } from './app/app';

(async () => {
  const port = config.port;
  const app = await createApp();
  app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}/graphql`);
  });
})();
