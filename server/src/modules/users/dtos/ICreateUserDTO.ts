/**
 * DTO: Create user
 */

interface ICreateUserDTO {
    username: string;
    password: string;
    permission_level: string;
}

export default ICreateUserDTO;
