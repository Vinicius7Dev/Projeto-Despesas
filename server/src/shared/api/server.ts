/**
 * Main server folder
 */

import api from './api';

api.listen(3333, () => {
    console.log('===> Server started on port 3333 <===');
});
