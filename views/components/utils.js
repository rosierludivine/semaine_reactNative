import * as FileSystem from 'expo-file-system'
import { readAsStringAsync } from 'expo-file-system'

//ecrire  dans un fichier 
export const WriteFile = async (data) => {
    //verifier le contenu de data 
    
    try {
        //verifier si le fichier est vide 
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')

        if (fileInfo.exists){
            // regarder si le fichier est deja existant 
            const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
            //Trouver un moyen pour ajouter le contenu passe en param au contenu existant 
        }else{
            await FilesSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
        }
        
        // si non recuperer les données
    }catch (error){
        console.log('erreur non catcge writefile util.js',error)
    }

}