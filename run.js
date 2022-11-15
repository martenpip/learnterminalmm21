function write (string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color = (i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,' ')));
    }
    write('\n');
}

write(boxen(chalk.black.bgGreen('marten :3'), {
    padding: 1,
    margin: 1,
    borderStyle: 'arrow', 
    title: 'Привет', 
    titleAlignment: 'top'

}));

write(boxen(chalk.white.bgRedBright('Pipenberg'), {
    padding: 1,
    margin: 1,
    title: 'меня', 
    titleAlignment: 'bottom'


}));

write(boxen(chalk.black.bgRed.underline('MM21'), {
    padding: 0.5,
    margin: 4,
    borderStyle: 'double', 
    title: 'зовут', 
    titleAlignment: 'right'

}));

write(boxen(chalk.black.bgWhite.italic('LEARNTERMINAL'), {
    padding: 1.5,
    margin: 2,
    borderStyle: 'double', 
}));

write(boxen(chalk.white.bgBlue.bold('LEARNTERMINAL'), {
    padding: 8,
    margin: 3.5,
    borderStyle: 'classic',
    title: 'Marten', 
    titleAlignment: 'center'

}));
write(boxen(chalk.white.bgGray.blueBright('08.11.2022'), {
    padding: 0.25,
    margin: 12,
    title: 'Pipenberg', 
    titleAlignment: 'left',
    borderStyle: 'double', 

}));