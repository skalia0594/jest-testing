const functions = require('./function');

test('Adding 2+2 would be 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adding 2+2 would not be 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});
test('Check no value present', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});
test('Check value present', () => {
    expect(functions.checkValue(1)).toBeTruthy();
});
test('Create User Shuham Kalia ', () => {
    expect(functions.createUser()).toEqual({
        firstName:"Shubham", 
        lastName:"Kalia"
    })
});
test('Test regex, there is no "S" in Kalia', () => {
    expect("Kalia").not.toMatch(/S/);
});
test('array has "apples"', () => {
    expect(['mangoes', "oranges", "apples"]).toContain('apples');
})

//API test

test('API should return name "Leanne Graham"', async () => {
    expect.assertions(1);       //number of api call we make in actual function
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
});

const nameCheck = () => console.log('Checking names.....');
describe('checking names', () => {
    beforeEach(() => nameCheck());

    test('should particular functions before 1', () => {
        expect('shubham').toBe('shubham');
    });
    test('should particular functions before 2', () => {
        expect('kalia').toBe('kalia');
    })
    
    
});
