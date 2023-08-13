import { Server } from 'http';

import { server } from './server';

server().then((instance: Server) => {
  instance.listen(process.env.PORT, () => {
    console.log(`\x1b[35mServer listening on port ${process.env.PORT}\x1b[0m`);
  });
});
