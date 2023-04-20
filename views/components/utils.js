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
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
        }
        
        // si non recuperer les données
    }catch (error){
        console.log('erreur non catch writefile util.js',error)
    }

}

// envoie d'un mail
export const sendFileByEmail = async (recipient, fileUri) => {
    let _recipient = recipient ? recipient : 'ludivine.rosier38@gmail.com';
    try {
        const fileInfo = await getFile(fileUri)
        console.log('file info before mail is sent: ', fileInfo);
        const fileContent = await getFileContent(fileUri);
        console.log('file content about to be sent by email: ', fileContent)
    } catch(err) {
        console.log('file does not exist: ', fileInfo)
    }

    const options = {
        attachments: [fileUri],
        recipients: [_recipient],
        subject: 'Objet du mail'
    }

    await MailComposer.composeAsync(options)
}
