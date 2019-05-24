describe("Add",function(){
it ("should add two numbers", function(){
    let result = add(0,0);
    expect(result).toBe(0);


});
it ("should be able to add foating numbers", function(){
    let result = add(2.2,4.2);
    expect(result).toBe(6.4);


});


});

describe("Multiply",function(){
    it ("should multiply two numbers", function(){
        let result = multiply(2,4);
        expect(result).toBe(8);
    } )
    it ("it should multiply as many numbers as possible", function(){
        let result = multiply(2,5,7,9,5);
        expect(result).toBe(3150);
    })
    it ("it should be part of the class", function(){
        expect(multiply).toBe(new multiply instanceof calculater())
    })
})