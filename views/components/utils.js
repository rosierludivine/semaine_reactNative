import * as FileSystem from 'expo-file-system'
import { readAsStringAsync } from 'expo-file-system'
import * as MailComposer from 'expo-mail-composer'

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
            const newFile = fileContent + " " + data
            //ecrire dans le dossier les nouvelles données 
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', newFile)
            console.log('file content if file exists: ', fileContent)
        }else{
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
        }
        
        // si non recuperer les données
    }catch (error){
        console.log('erreur non catch writefile util.js',error)
    }

}

// envoyer un mail
export const mail = async (fileUri) => {

    const Urlfile = {
        attachments: [fileUri],
    }

    await MailComposer.composeAsync(Urlfile)
}