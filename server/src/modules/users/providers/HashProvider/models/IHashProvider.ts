/**
 * Interface: hash provider
 */

interface IHashProvider {
    generate(toHash: string): Promise<string>; // Generate hash
    compare(noHashed: string, hashed: string): Promise<boolean>; // Compare hash
}

export default IHashProvider;
