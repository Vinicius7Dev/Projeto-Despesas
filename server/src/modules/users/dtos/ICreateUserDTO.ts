/**
 * DTO: Create user
 */

interface ICreateUserDTO {
    username: string;
    password: string;
    permission_level: string;
    permission_code: string;
}

export default ICreateUserDTO;
