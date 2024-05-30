

export const shortText = (text:string | undefined,len:number) =>{

    if(text && text.length > len){

        return `${text.slice(0, len)}...`
    }

    return text

}