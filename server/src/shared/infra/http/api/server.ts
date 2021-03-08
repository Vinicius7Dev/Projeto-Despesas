/**
 * Main server folder
 */

import api from './api';
import '../../typeorm';

api.listen(3333, () => {
    console.log('===> Server started on port 3333 <===');
});
