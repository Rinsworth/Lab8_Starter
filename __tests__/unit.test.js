// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


/*isPhoneNumber*/ 
test('Valid phone number (123)-456-7890.', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('Valid phone number 444-555-6666.', () => {
    expect(functions.isPhoneNumber('444-555-6666')).toBe(true);
});

test('Invalid phone number 4445556666.', () => {
    expect(functions.isPhoneNumber('4445556666')).toBe(false);
});

test('Invalid phone number (135)-791-357.', () => {
    expect(functions.isPhoneNumber('(135)-791-357')).toBe(false);
});

test('Invalid phone number 000111222.', () => {
    expect(functions.isPhoneNumber('000111222')).toBe(false);
});

/*isEmail*/
test('Valid email tpowell2@ucsd.edu.', () => {
    expect(functions.isEmail('tpowell2@ucsd.edu')).toBe(true);
   });

test('Valid email test@gmail.com.', () => {
    expect(functions.isEmail('test@gmail.com')).toBe(true);
   });

test('Invalid email test@ucsd.', () => {
    expect(functions.isEmail('test@ucsd.')).toBe(false);
   });

test('Invalid email abc!dedf.co.', () => {
    expect(functions.isEmail('abc!def.co')).toBe(false);
   });

/*isStrongPassword*/
test('Valid strong password B312gb', () => {
    expect(functions.isStrongPassword('B312gb')).toBe(true);
});

test('Valid strong password A145GHG__H', () => {
    expect(functions.isStrongPassword('A145GHG__H')).toBe(true);
});

test('Invalid strong password ?!@.//.', () => {
    expect(functions.isStrongPassword('?!@.//.')).toBe(false);
});

test('Invalid strong password -machinelearningkindofsucksbutitsalrightiguess', () => {
    expect(functions.isStrongPassword('-machinelearningkindofsucksbutitsalrightiguess')).toBe(false);
});

/*isDate*/
test('Valid date 08/24/2001', () => {
    expect(functions.isDate('08/24/2001')).toBe(true);
});

test('Valid date 12/21/1221', () => {
    expect(functions.isDate('12/21/1221')).toBe(true);
});

test('Invalid date 1/1/21', () => {
    expect(functions.isDate('1/1/21')).toBe(false);
});

test('Invalid date 120/24/2001', () => {
    expect(functions.isDate('120/24/2001')).toBe(false);
});

/*isHexColor*/
test('Valid hex color #BBBCCC', () => {
    expect(functions.isHexColor('#BBBCCC')).toBe(true);
});

test('Valid hex color #FFF', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('Invalid hex color 0xaa', () => {
    expect(functions.isHexColor('0xaa')).toBe(false);
});

test('Invalid hex color ABCD111', () => {
    expect(functions.isHexColor('ABCD111')).toBe(false);
});