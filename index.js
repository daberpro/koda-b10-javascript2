const r = 4;
console.log(r ** 2 * 3.14);
console.log(2 * r * 3.14);


const we = {
    are: {
        the: {
            best: "Koda"
        }
    }
};

console.log(we.are.the.best);

const hello = {
    world: "Hello World"
};

console.log(hello.world);

const obj = {
    str: [
        "",
        "",
        "",
        [
            "",
            [
                "",
                "",
                {
                    man: [
                        {
                            tech: {
                                academy: "Tech Academy"
                            }
                        }
                    ]
                }
            ]
        ]
    ]
};

console.log(obj.str[3][1][2].man[0].tech.academy);

const my = [
    {
        favourite: [
            {},
            {},
            {},
            {
                fruit: {
                    is: "Apple"
                }
            }
        ]
    }
];

console.log(my[0].favourite[3].fruit.is);


const num = {
    first: [0,16],
    second: [0,0,16]
};

console.log(num.first[1] + num.second[2]);
