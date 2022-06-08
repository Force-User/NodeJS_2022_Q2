import process from 'process';


const getUpDirectoryPath = () => {
    const pathNames = process.cwd().split('\\');
   return pathNames.filter(item =>
       item !== pathNames[pathNames.length - 1]
   )
}

export const upToDirectory = () => {
    let newPath = getUpDirectoryPath().join('\\');
    if(newPath === 'C:') newPath = `${newPath}\\`;
    process.chdir(newPath);
    console.log(process.cwd());
}



