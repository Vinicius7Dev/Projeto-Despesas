/**
 * Interface: hash provider
 */

interface IHashProvider {
    generate(toHash: string): Promise<string>; // Generate hash
    compare(hashed: string, noHashed: string): Promise<boolean>; // Compare hash
}

export default IHashProvider;
