export class Nasa {
   
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string; 
    url: string;

    constructor(valDate: string, valExplanation: string, valHdurl: string, valMedia_type: string, valService_version: string, valTitle: string, valUrl: string){
        
        this.date = valDate
        this.explanation = valExplanation
        this.hdurl = valHdurl
        this.media_type = valMedia_type
        this.service_version = valService_version
        this.title = valTitle
        this.url = valUrl
    }
}