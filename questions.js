import inquirer from 'inquirer';
inquirer
    .prompt([
        {type: 'input', name: 'vroom', message: 'What is your dream car'},
        {type: 'number', name: 'height', message: 'How tall would you like to be'},
        {type: 'confirm', name: 'shoot', message: 'Are school shooting bad?'},
        {type: 'list', name: 'website', message: 'Favorite website to pass time', choices:["YouTube","Netflix","Pornhub ;)"]},
        {type: 'rawlist', name: 'car', message: 'Wich car would you perfer', choices:["Volkswagen","BMW","Mercedez","Ferrari"]},
        {type: 'expand', name: 'fruit', message: 'Is a banana a fruit?', choices:[{key:"y",value:"yes"},{key:"n",value:"no"},{key:"m",value:"maybe"},{key:"b",value:"no its a carrot"}]},
        {type: 'checkbox', name: 'teatcher', message: 'Do you like your teatchers?',choices:["Kaup", "Terras", "Kattago", "Kaazonen", "Inga"]},
        {type: 'password', name: 'github', message: 'Share your github password :)', default: 'default'},
        {type: 'editor', name: 'password', message: 'What is the main password you use if you just need a temp password.'},
    ])
    .then((answers) => {
        console.log(`Wow ${answers.vroom} is such a cool car`);
        console.log(`Dang i would also like to be ${answers.height} `);
        console.log(`I would also say${answers.shoot} `);
        console.log(`I also like ${answers.website} its a very good website to pass time. `);
        console.log(`My favourite car is ${answers.car} `);
        console.log(`${answers.fruit}, is a fruit. Good job`);
        console.log(`Yes i also like${answers.teatcher}.`);
        console.log(`${answers.github}`);
        console.log(`${answers.password}`);

    })