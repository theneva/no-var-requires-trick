function trick(a: unknown) {
  return a;
}

const fs = trick(require('fs'));

const fs2 = require('fs');
