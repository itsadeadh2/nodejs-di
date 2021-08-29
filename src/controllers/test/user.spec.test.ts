import UserController from "../user";
import UserRepository from "../../interfaces/user.repository";

describe('UserController', () => {
    let userController: UserController;
    let userRepository: UserRepository;

    beforeAll(() => {
        userRepository = {
            save: jest.fn()
        }
        userController = new UserController();
        userController.userRepository = userRepository;
    })
    describe('createUser', () => {
        test('delegates the user creation to the userRepository', () => {
            const name = 'Polnareff!';
            userController.createUser(name);
            expect(userRepository.save).toHaveBeenCalledWith(name);
        })
    })
})
