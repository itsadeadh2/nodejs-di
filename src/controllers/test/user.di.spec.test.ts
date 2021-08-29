import UserControllerDi from "../user.di";
import UserRepository from "../../interfaces/user.repository";

describe('UserControllerDi', () => {
    let userController: UserControllerDi;
    let userRepository: UserRepository;

    beforeAll(() => {
        userRepository = {
            save: jest.fn(),
        }
        userController = new UserControllerDi(userRepository);
    })

    describe('createUser', () => {
        test('delegates the user creation to the userRepository', () => {
            const name = 'Polnareff!';
            userController.createUser(name);
            expect(userRepository.save).toHaveBeenCalledWith(name);
        })
    })
})
