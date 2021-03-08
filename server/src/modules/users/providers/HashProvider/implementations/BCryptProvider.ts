/**
 * BCrypt implementation
 */

import { hash, compare } from 'bcrypt';
import IHashProvider from '../models/IHashProvider';

class BCryptProvider implements IHashProvider {
    public async generate(toHash: string): Promise<string> {
        // Generate hash
        const hashed = await hash(toHash, 8);

        return hashed;
    }

    public async compare(hashed: string, noHashed: string): Promise<boolean> {
        // Compare hash
        const isValid = await compare(hashed, noHashed);

        return isValid;
    }
}

export default BCryptProvider;
